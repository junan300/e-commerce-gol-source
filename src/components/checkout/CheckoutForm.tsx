import React, { useState } from 'react';
import { useCart } from '@/lib/CartContext';

const CheckoutForm = () => {
  const { state, clearCart } = useCart();
  const { totalPrice } = state;
  
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Shipping Information
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'United States',
    
    // Payment Information (mock)
    cardName: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });
  
  const [orderComplete, setOrderComplete] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (step === 1) {
      setStep(2);
    } else {
      // Simulate order processing
      setTimeout(() => {
        setOrderComplete(true);
        clearCart();
      }, 1500);
    }
  };
  
  if (orderComplete) {
    return (
      <div className="bg-gray-900 text-white rounded-lg p-8 shadow-lg border border-gray-800 text-center">
        <div className="w-16 h-16 bg-green-600 rounded-full mx-auto flex items-center justify-center mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold mb-4">Order Confirmed!</h2>
        <p className="text-gray-300 mb-6">
          Thank you for your purchase. Your order has been received and is being processed.
          You will receive a confirmation email shortly.
        </p>
        <p className="text-blue-300 font-medium mb-8">Order #: {Math.floor(Math.random() * 1000000).toString().padStart(6, '0')}</p>
        <button
          onClick={() => window.location.href = '/'}
          className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-500 text-white font-medium rounded-md hover:opacity-90 transition-opacity"
        >
          Return to Home
        </button>
      </div>
    );
  }
  
  return (
    <div className="bg-gray-900 text-white rounded-lg p-6 shadow-lg border border-gray-800">
      <h2 className="text-2xl font-bold mb-6">Checkout</h2>
      
      {/* Progress Steps */}
      <div className="flex mb-8">
        <div className={`flex-1 text-center relative ${step >= 1 ? 'text-blue-300' : 'text-gray-500'}`}>
          <div className={`w-8 h-8 mx-auto rounded-full flex items-center justify-center mb-2 ${
            step >= 1 ? 'bg-purple-600' : 'bg-gray-700'
          }`}>
            1
          </div>
          <div className="text-sm">Shipping</div>
          <div className="absolute top-4 left-1/2 w-full h-0.5 -z-10 bg-gray-700">
            <div className={`h-full ${step >= 2 ? 'bg-purple-600' : 'bg-gray-700'}`} style={{ width: '100%' }}></div>
          </div>
        </div>
        
        <div className={`flex-1 text-center relative ${step >= 2 ? 'text-blue-300' : 'text-gray-500'}`}>
          <div className={`w-8 h-8 mx-auto rounded-full flex items-center justify-center mb-2 ${
            step >= 2 ? 'bg-purple-600' : 'bg-gray-700'
          }`}>
            2
          </div>
          <div className="text-sm">Payment</div>
        </div>
      </div>
      
      <form onSubmit={handleSubmit}>
        {step === 1 ? (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4">Shipping Information</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-gray-300 mb-1">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 text-white"
                />
              </div>
              
              <div>
                <label htmlFor="lastName" className="block text-gray-300 mb-1">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 text-white"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="email" className="block text-gray-300 mb-1">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 text-white"
              />
            </div>
            
            <div>
              <label htmlFor="address" className="block text-gray-300 mb-1">Address</label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 text-white"
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label htmlFor="city" className="block text-gray-300 mb-1">City</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 text-white"
                />
              </div>
              
              <div>
                <label htmlFor="state" className="block text-gray-300 mb-1">State/Province</label>
                <input
                  type="text"
                  id="state"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 text-white"
                />
              </div>
              
              <div>
                <label htmlFor="zipCode" className="block text-gray-300 mb-1">ZIP/Postal Code</label>
                <input
                  type="text"
                  id="zipCode"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 text-white"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="country" className="block text-gray-300 mb-1">Country</label>
              <select
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 text-white"
              >
                <option value="United States">United States</option>
                <option value="Canada">Canada</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="Australia">Australia</option>
                <option value="Germany">Germany</option>
                <option value="France">France</option>
                <option value="Japan">Japan</option>
              </select>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4">Payment Information</h3>
            
            <div>
              <label htmlFor="cardName" className="block text-gray-300 mb-1">Name on Card</label>
              <input
                type="text"
                id="cardName"
                name="cardName"
                value={formData.cardName}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 text-white"
              />
            </div>
            
            <div>
              <label htmlFor="cardNumber" className="block text-gray-300 mb-1">Card Number</label>
              <input
                type="text"
                id="cardNumber"
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleChange}
                required
                placeholder="XXXX XXXX XXXX XXXX"
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 text-white"
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="expiryDate" className="block text-gray-300 mb-1">Expiry Date</label>
                <input
                  type="text"
                  id="expiryDate"
                  name="expiryDate"
                  value={formData.expiryDate}
                  onChange={handleChange}
                  required
                  placeholder="MM/YY"
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 text-white"
                />
              </div>
              
              <div>
                <label htmlFor="cvv" className="block text-gray-300 mb-1">CVV</label>
                <input
                  type="text"
                  id="cvv"
                  name="cvv"
                  value={formData.cvv}
                  onChange={handleChange}
                  required
                  placeholder="XXX"
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 text-white"
                />
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-gray-800 rounded-md">
              <h4 className="font-medium mb-2">Order Summary</h4>
              <div className="flex justify-between mb-2">
                <span className="text-gray-300">Subtotal</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-300">Shipping</span>
                <span>$0.00</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-300">Tax</span>
                <span>${(totalPrice * 0.1).toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-bold mt-2 pt-2 border-t border-gray-700">
                <span>Total</span>
                <span className="text-blue-300">${(totalPrice + totalPrice * 0.1).toFixed(2)}</span>
              </div>
            </div>
          </div>
        )}
        
        <div className="mt-8 flex justify-between">
          {step === 1 ? (
            <button
              type="button"
              onClick={() => window.history.back()}
              className="px-6 py-2 border border-gray-600 text-gray-300 rounded-md hover:bg-gray-800 transition-colors"
            >
              Back to Cart
            </button>
          ) : (
            <button
              type="button"
              onClick={() => setStep(1)}
              className="px-6 py-2 border border-gray-600 text-gray-300 rounded-md hover:bg-gray-800 transition-colors"
            >
              Back
            </button>
          )}
          
          <button
            type="submit"
            className="px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-500 text-white font-medium rounded-md hover:opacity-90 transition-opacity"
          >
            {step === 1 ? 'Continue to Payment' : 'Place Order'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CheckoutForm;

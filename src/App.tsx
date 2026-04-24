import React, { useState } from 'react';
import { AlertBox } from './components/AlertBox/alertBox.tsx';
import { UserProfileCard } from './components/UserProfileCard/UserProfileCard.tsx';
import { ProductDisplay } from './components/ProductDisplay/ProductDisplay.tsx';
import type { User, Product } from './types/index.ts';

// Mock Data
const user: User = {
  id: '1',
  name: 'John Doe',
  email: 'john.doe@example.com',
  role: 'Software Engineer',
  avatarUrl: 'https://i.pravatar.cc/150?u=1'
};

const product: Product = {
  id: '1',
  name: 'Wireless Headphones',
  price: 199.99,
  description: 'High-quality wireless headphones with noise cancellation.',
  imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80',
  inStock: true
};

export const App: React.FC = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [cartItems, setCartItems] = useState<string[]>([]);

  const handleAddToCart = (productId: string) => {
    setCartItems([...cartItems, productId]);
    setShowAlert(true);
    // Auto-hide alert after 3 seconds
    setTimeout(() => setShowAlert(false), 3000); 
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto space-y-6">
        
        {/* Fixed height wrapper to prevent layout shift when alert appears */}
        <div className="h-24"> 
          {showAlert && (
            <AlertBox
              type="success"
              message="Success! Product added to cart."
              onClose={() => setShowAlert(false)}
            >
              <p>You currently have {cartItems.length} item(s) in your cart.</p>
            </AlertBox>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* User Profile Implementation */}
          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-4">Current User</h2>
            <UserProfileCard
              user={user}
              showEmail={true}
              showRole={true}
              onEdit={(userId) => alert(`Routing to edit page for user ${userId}`)}
            >
              <div className="text-sm text-gray-500">
                Last login: 2 hours ago
              </div>
            </UserProfileCard>
          </div>

          {/* Product Implementation */}
          <div>
             <h2 className="text-xl font-bold text-gray-800 mb-4">Featured Item</h2>
            <ProductDisplay
              product={product}
              showDescription={true}
              showStockStatus={true}
              onAddToCart={handleAddToCart}
            >
              <div className="text-sm text-gray-500 flex items-center">
                <span className="mr-2">📦</span> Free shipping available
              </div>
            </ProductDisplay>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
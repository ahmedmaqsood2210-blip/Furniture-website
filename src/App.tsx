import React, { useState } from 'react';
import { StoreProvider, useStore } from './context/StoreContext';
import { AnnouncementBar } from './components/AnnouncementBar';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ServiceBenefits } from './components/ServiceBenefits';
import { ShopByCategory } from './components/ShopByCategory';
import { BestSellers } from './components/BestSellers';
import { PromoBanner } from './components/PromoBanner';
import { NewArrivals } from './components/NewArrivals';
import { ShopTheLook } from './components/ShopTheLook';
import { BrandStory } from './components/BrandStory';
import { CustomerTestimonials } from './components/CustomerTestimonials';
import { NewsletterSection } from './components/NewsletterSection';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { SearchModal } from './components/SearchModal';
import { AccountModal } from './components/AccountModal';
import { QuickViewModal } from './components/QuickViewModal';
import { ToastNotification } from './components/ToastNotification';
import { ShopPage } from './components/ShopPage';
import { ProductDetailPage } from './components/ProductDetailPage';
import { AboutPage } from './components/AboutPage';
import { InspirationPage } from './components/InspirationPage';
import { SalePage } from './components/SalePage';
import { Product } from './types';

const MainContent: React.FC = () => {
  const { currentPage } = useStore();
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  const handleOpenQuickView = (product: Product) => {
    setQuickViewProduct(product);
  };

  const handleCloseQuickView = () => {
    setQuickViewProduct(null);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F6] text-[#242522]">
      {/* Top Announcement Bar */}
      <AnnouncementBar />

      {/* Sticky Main Header */}
      <Navbar />

      {/* Main Page Content */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <>
            <HeroSection />
            <ServiceBenefits />
            <ShopByCategory />
            <BestSellers onQuickView={handleOpenQuickView} />
            <PromoBanner />
            <NewArrivals onQuickView={handleOpenQuickView} />
            <ShopTheLook />
            <BrandStory />
            <CustomerTestimonials />
            <NewsletterSection />
          </>
        )}

        {currentPage === 'shop' && (
          <ShopPage onQuickView={handleOpenQuickView} />
        )}

        {currentPage === 'product' && (
          <ProductDetailPage onQuickView={handleOpenQuickView} />
        )}

        {currentPage === 'about' && (
          <AboutPage />
        )}

        {currentPage === 'inspiration' && (
          <InspirationPage />
        )}

        {currentPage === 'sale' && (
          <SalePage onQuickView={handleOpenQuickView} />
        )}
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals & Overlay Drawers */}
      <CartDrawer />
      <CheckoutModal />
      <SearchModal />
      <AccountModal />
      <QuickViewModal
        product={quickViewProduct}
        onClose={handleCloseQuickView}
      />
      <ToastNotification />
    </div>
  );
};

export default function App() {
  return (
    <StoreProvider>
      <MainContent />
    </StoreProvider>
  );
}

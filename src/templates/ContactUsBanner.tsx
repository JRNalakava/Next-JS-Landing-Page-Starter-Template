import ContactModal from '@/components/ContactModal';
import React from 'react';

export default function ContactUsBanner() {
  return(
    <div className="flex justify-between">
      <div>
        <div>
          <div className="text-golden-100">Contact us for more information.</div>
          <div className="text-golden-100">We would love to hear from you</div>
        </div>
      </div>
      
      <button className="btn-golden">
        <ContactModal />
      </button>
    </div>
  )
};

import React from 'react';
import { Founder } from '../types';
import { downloadVCard } from '../utils/vcard';

interface ProfileCardProps {
  founder: Founder;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ founder }) => {
  const shareDetails = () => {
    if (navigator.share) {
      navigator.share({
        title: `${founder.name} | InfluRunner`,
        text: `Contact ${founder.name} at InfluRunner`,
        url: window.location.href,
      }).catch(console.error);
    } else {
      // Fallback for desktop copy to clipboard
      navigator.clipboard.writeText(window.location.href).then(() => {
        alert("Link copied to clipboard!");
      });
    }
  };

  return (
    <div className="glass-card rounded-[2.5rem] p-8 flex flex-col items-center space-y-6 transition-all hover:border-orange-500/30 hover:shadow-2xl hover:shadow-orange-500/5 group h-full">
      <div className="relative">
        <div className="w-40 h-40 rounded-full border-[6px] border-orange-500/20 p-1 group-hover:border-orange-500 transition-colors duration-500">
          <img 
            src={founder.image} 
            alt={founder.name} 
            className="w-full h-full rounded-full object-cover shadow-2xl" 
          />
        </div>
        <div className="absolute bottom-1 right-3 bg-orange-500 w-8 h-8 flex items-center justify-center rounded-full shadow-lg border-2 border-black">
          <i className="fas fa-check text-white text-[10px]"></i>
        </div>
      </div>
      
      <div className="text-center space-y-1">
        <h2 className="text-3xl font-extrabold text-white tracking-tight">{founder.name}</h2>
        <p className="text-orange-500 font-bold uppercase tracking-[0.2em] text-xs">{founder.role}</p>
      </div>

      <div className="grid grid-cols-4 gap-4 w-full px-2">
        <a 
          href={`tel:${founder.phone}`} 
          title="Call"
          className="flex flex-col items-center group/icon"
        >
          <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center group-hover/icon:bg-orange-500 group-hover/icon:border-orange-500 transition-all">
            <i className="fas fa-phone text-white text-sm"></i>
          </div>
        </a>
        
        <a 
          href={`mailto:${founder.email}`} 
          title="Email"
          className="flex flex-col items-center group/icon"
        >
          <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center group-hover/icon:bg-orange-500 group-hover/icon:border-orange-500 transition-all">
            <i className="fas fa-envelope text-white text-sm"></i>
          </div>
        </a>

        <a 
          href={`https://wa.me/${founder.phone.replace(/\D/g, '')}`} 
          target="_blank" 
          rel="noopener noreferrer"
          title="WhatsApp"
          className="flex flex-col items-center group/icon"
        >
          <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center group-hover/icon:bg-[#25D366] group-hover/icon:border-[#25D366] transition-all">
            <i className="fab fa-whatsapp text-white text-sm"></i>
          </div>
        </a>

        <button 
          onClick={shareDetails}
          title="Share Link"
          className="flex flex-col items-center group/icon"
        >
          <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center group-hover/icon:bg-blue-600 group-hover/icon:border-blue-600 transition-all">
            <i className="fas fa-link text-white text-sm"></i>
          </div>
        </button>
      </div>

      <div className="w-full pt-2">
        <button 
          onClick={() => downloadVCard(founder)}
          className="w-full bg-white text-black hover:bg-orange-500 hover:text-white font-black py-4 rounded-2xl transition-all shadow-xl active:scale-95 text-sm uppercase tracking-widest flex items-center justify-center gap-3"
        >
          <i className="fas fa-user-plus"></i>
          Save Contact
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;

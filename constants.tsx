
import { Founder, CompanyInfo } from './types';

export const FOUNDERS: Founder[] = [
  {
    name: "Krish Thakkar",
    role: "Founder",
    phone: "+91 9099368070",
    email: "krish@influrunner.com",
    image: "./krish.jpeg"
  },
  {
    name: "Pavan Patel",
    role: "Co-Founder",
    phone: "+91 8866947440",
    email: "pavan@influrunner.com",
    image: "./pavan.jpeg"
  }
];

export const COMPANY_DATA: CompanyInfo = {
  mission: "Democratizing the Influencer Economy.",
  description: "InfluRunner changes the game by connecting everyone—from corner coffee shops to global enterprises—with influencers who genuinely align with their values. We eliminate fragmentation and lack of transparency in the current market.",
  values: [
    {
      title: "Total Transparency",
      text: "Clear metrics and honest pricing for all participants."
    },
    {
      title: "Inclusive Network",
      text: "A spotlight for micro-influencers often overlooked by niche brands."
    },
    {
      title: "Local to Global",
      text: "From small shopkeepers to massive enterprises, we bridge the gap."
    }
  ]
};

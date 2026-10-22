import PhoneMockup from '@/components/PhoneMockup';
import AnnouncementsScreen from '@/components/app-screens/AnnouncementsScreen';
import { UrgentFloating } from '@/components/app-screens/FloatingCards';

export default function GetAppPhone() {
  return (
    <PhoneMockup label="Campus Update app, Announcements screen" className="bg-white/70" floating={<UrgentFloating />}>
      <AnnouncementsScreen />
    </PhoneMockup>
  );
}

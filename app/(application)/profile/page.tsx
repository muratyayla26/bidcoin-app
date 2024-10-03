import { AuthController } from "@/components/profile/auth-controller";
import { ProfileInfoCard } from "@/components/profile/profile-info-card";
import { SideInfoCard } from "@/components/profile/side-info-card";

export default async function ProfilePage() {
  return (
    <AuthController>
      <div className="flex justify-between items-center gap-6">
        <ProfileInfoCard />
        <SideInfoCard />
      </div>
    </AuthController>
  );
}

import { AuthForm } from "@/components/AuthForm";

export default function LoginPage() {
  return (
    <div className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <AuthForm mode="login" />
      </div>
    </div>
  );
}

'use client';
import Lottie from "lottie-react";
import loadingAnimation from "../../../../public/lottie/loading.json";

export default function SendingPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Lottie animationData={loadingAnimation} loop={true} style={{ width: 200, height: 200 }} />
      <p className="mt-4 text-lg">送信中です...</p>
    </div>
  );
} 
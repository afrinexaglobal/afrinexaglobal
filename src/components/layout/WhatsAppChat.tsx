import { MessageCircle } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function WhatsAppChat() {
  const [isHovered, setIsHovered] = useState(false);
  const phoneNumber = "2348151022244";
  const message = encodeURIComponent("Hello! I'm interested in learning more about Afrinexa's services.");

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-50 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative flex items-center">
        {/* Tooltip */}
        <div className={cn(
          "absolute left-full ml-3 px-4 py-2 bg-card rounded-lg shadow-lg border border-border whitespace-nowrap transition-all duration-300",
          isHovered ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2 pointer-events-none"
        )}>
          <span className="text-sm font-medium text-foreground">Chat with us!</span>
          <div className="absolute left-0 top-1/2 -translate-x-1 -translate-y-1/2 w-2 h-2 bg-card border-l border-b border-border rotate-45" />
        </div>

        {/* Button */}
        <div className="relative">
          {/* Pulse animation */}
          <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20" />
          
          <div className="relative w-14 h-14 rounded-full bg-green-500 flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300">
            <MessageCircle className="w-7 h-7 text-white" fill="white" />
          </div>
        </div>
      </div>
    </a>
  );
}
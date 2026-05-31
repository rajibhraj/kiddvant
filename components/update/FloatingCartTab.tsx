"use client";

import { ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useCartSidebar } from "@/context/CartSidebarContext";

export default function FloatingCartTab() {
  const { getCartCount, getCartTotal } = useCart();
  const { openCart } = useCartSidebar();

  const count = getCartCount();
  const total = getCartTotal();

  if (count === 0) return null;

  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-40 flex flex-col font-sans select-none">
      <button
        className="bg-gradient-to-br from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white pl-4 pr-3.5 py-4 rounded-l-2xl border-y border-l border-pink-400/40 shadow-[0_10px_25px_-5px_rgba(244,63,94,0.4)] flex flex-col items-center justify-center gap-2 cursor-pointer transition-all duration-300 hover:-translate-x-1.5 active:scale-95 group"
        onClick={openCart}
        aria-label={`Open cart — ${count} item${count !== 1 ? "s" : ""}`}
      >
        {/* Icon with bounce */}
        <div className="relative p-1 rounded-full bg-white/10 group-hover:animate-bounce-slow">
          <ShoppingCart size={18} className="stroke-[2.5]" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[9px] font-black w-4 h-4 rounded-full flex items-center justify-center border border-pink-500">
            {count > 9 ? "9+" : count}
          </span>
        </div>

        {/* Vertical text */}
        <div className="flex flex-col items-center gap-0.5 mt-1">
          <span className="text-[11px] font-black tracking-widest uppercase">
            {count} Item{count !== 1 ? "s" : ""}
          </span>
          <span className="text-[10px] font-black text-pink-100 font-sans tracking-wide">
            ৳{total.toLocaleString()}
          </span>
        </div>
      </button>

      <style>{`
        @keyframes miniBounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }
        .group-hover\\:animate-bounce-slow {
          animation: miniBounce 1s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

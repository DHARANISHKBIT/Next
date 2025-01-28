"use client";

interface Props {
  name: string;
  color: string;
  text?: string
}

export default function Button({ name, color, text }: Props) {
  return (
    <button
      className="w-[187px] h-[36px] flex justify-center items-center text-black rounded-md text-sm font-semibold"
      style={{ backgroundColor: color, color: text }}
    >
      {name}
    </button>
  );
}

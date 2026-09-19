"use client"

export default function AdsterraBanner() {
  return (
    <div className="my-4 flex justify-center w-full overflow-hidden">
      <div
        className="hidden md:block"
        style={{ width: 728, height: 90 }}
      />
      <div
        className="block md:hidden"
        style={{ width: 320, height: 50 }}
      />
    </div>
  )
}

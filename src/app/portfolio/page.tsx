import Footer from "@/components/footer";

export default function Portfolio() {
  return (
    <div className="flex h-full min-h-[93.65dvh] w-full flex-col items-center justify-center bg-[url('/portfolio.jpg')] bg-cover bg-center bg-no-repeat">
      <div className=" flex h-full min-h-[93.65dvh] w-full flex-col items-center justify-between overflow-y-auto bg-background/80 ">
        <div className="flex h-auto min-h-[84.2dvh] w-full flex-col items-center justify-center gap-2 px-[2%] pt-2 sm:gap-4 md:gap-6"></div>
        <div className="flex h-auto min-h-[9.45dvh] w-full">
          <Footer />
        </div>
      </div>
    </div>
  );
}

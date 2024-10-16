import { Button } from "@/components/ui/button";

const ProductCard = () => {
  return (
    <div className="relative bg-white rounded-lg shadow border border-gray-200 p-2">
      <div className="justify-start items-start gap-4 inline-flex">
        <img
          className="w-[101px] h-[158px] rounded"
          src={
            "https://s3-alpha-sig.figma.com/img/fe21/8b78/7cd3beb68657aaf9079a90e70e21e5c4?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FpzX6zAOmWXX-yLy2Xc4RwNhR6IJm~4-amX9GcVU0YxgoJeo5CRiObP1tFBG9rYGGslsXvx7yyX3BtD8D0PgJjiA7chXr7ozr81lFYamDZrDhijX6h2zq4vSROVPycRyGH5kc1HIQpUGx7q1PgnsnvCs4OOSu9uI67vSuYtLIRJgcx8V6f9uGhyPZKK6uj7nn70urja0r1QisH3zBJBT2YpJRoP0Ka9gt4IB~bL0JZEi4z1qjxU9~fgRmg381ufHHNcRsodk1sBpEntPtj02P3eQPZ5nmCwfl70P1~OyhJLF9VY-g3heyNQ6gFJelsTPAKAUT2iBiT4mwXRMumyhAA__"
          }
        />

        <div className="flex-col justify-start items-start gap-3 inline-flex">
          <h4 className="self-stretch text-gray-700 text-2xl font-semibold font-['Roboto'] leading-[28.80px]">
            Bornolipi
          </h4>
          <div className="self-stretch h-[110px] flex-col justify-center items-center gap-2 flex">
            <div className="self-stretch text-center">
              <span className="text-[#28a745] text-2xl font-semibold font-['Nunito'] leading-[31.20px] tracking-wide">
                ${" "}
              </span>
              <span className="text-gray-700 text-2xl font-semibold font-['Nunito'] leading-[31.20px] tracking-wide">
                400/=
              </span>
            </div>
            <div className="self-stretch h-[71px] flex-col justify-start items-start gap-1 flex">
              <p className="self-stretch text-gray-700 text-sm font-normal font-['Nunito'] leading-[21px] tracking-tight">
                Type: Book
              </p>
              <p className="self-stretch text-gray-700 text-sm font-normal font-['Nunito'] leading-[21px] tracking-tight">
                Total Page: 20
              </p>
              <p className="self-stretch text-gray-700 text-sm font-normal font-['Nunito'] leading-[21px] tracking-tight">
                Total sale: 30k
              </p>
            </div>
          </div>
        </div>
      </div>
      <p className=" text-gray-600 text-xs font-normal font-['Roboto'] leading-[18px] tracking-tight">
        Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
        libero et velit interdum, ac aliquet odio mattis...
      </p>

      <div className="flex justify-center">
        <Button variant="outline" className="text-primary border-primary">
          Details
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;

import fondo from "../../assets/fondo.png";
export const FraseMainSection = () => {
  return (
    <div className="flex justify-around flex-col xl:flex-row items-center mt-4 h-screen">
      <div>
        <h2 className="uppercase text-red-900 w-full text-xl xl:text-5xl text-center">
          no hay mal que 100 años dure,
          <br />
          ni pena que el{" "}
          <span className="font-custom xl:7xl text-3xl">chocolate</span> no cure
        </h2>
      </div>
      <img src={fondo} className="h-[400px] xl:h-[550px] w-max pr-0" />
    </div>
  );
};

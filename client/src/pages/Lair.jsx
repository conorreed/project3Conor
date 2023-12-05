// import LairBackground from '../components/LairBackground';

const Lair = () => {
  return (
    <div className="flex justify-content-center"> {/* centering background image */}
      

      <div className=" lairBackground w-[100rem] h-[60rem] flex justify-content-center"> {/* supplying background image and flex parent  */}

        
        {/* <LairBackground /> */} {/* ignore this for now */}
        <div>{/* housing h1 and flames. not sure how to put flames where i want them */}

          <h1 className="text-blue-100">DA LAIR</h1>
        </div>
        
        {/* nice to have moving flames but don't worry too much */}
        {/* <div className="flames flex">
          <div>
            <img src="/gif/flames.gif" alt="flame" />
          </div>
          <div>
            <img src="/gif/flames.gif" alt="flame" />
          </div>
          <div>
            <img src="/gif/flames.gif" alt="flame" />
          </div>
        </div> */}
      </div>
    </div>
  );
};
export default Lair;

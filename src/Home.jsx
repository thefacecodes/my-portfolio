import React from "react";
import Typewriter from "typewriter-effect";

function Home() {
  return (
    <div className="home">
      <h1>
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString("Hi, You are welcome.")
              // .callFunction(() => {
              //   console.log("String typed out!");
              // })
              .pauseFor(2500)
              .deleteChars(16)
              // .callFunction(() => {
              //   console.log("All strings were deleted");
              // })

              .typeString("I am The Face Codes.")

              .start();
            //   .loop(true);
          }}
        />
      </h1>
      <p>
        I am Ezekiel, A passionate and creative Frontend Web Developer, WordPress Developer and Computer Scientist.
      </p>
      
    </div>
  );
}

export default Home;

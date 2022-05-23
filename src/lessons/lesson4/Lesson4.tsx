import React from "react";
import "./lesson_4";

const Lesson4 = () => {
  type HandlePromise = {
    promise: any;
    resolve: any;
    reject: any;
    onSuccsess: (paramName: string) => void;
    onError: (paramName: string) => void;
  };

  const handlePromise: HandlePromise = {
    promise: null,
    resolve: null,
    reject: null,
    onSuccsess: (paramName: string) =>
      console.log(`Promise is resolved with data: ${paramName}`),
    onError: (paramName: string) =>
      console.log(`Promise is rejected with error: ${paramName}`),
  };

  const createHandler = () => {
    const prom = new Promise((res, rej) => {
      handlePromise.reject = rej;
      handlePromise.resolve = res;
    }).catch((err) => err);
    handlePromise.promise = prom;
    console.log(handlePromise);
  };

  const resolveHandler = () => {
    handlePromise.resolve(handlePromise.onSuccsess("Super"));
  };

  const rejectHandler = () => {
    handlePromise.reject(handlePromise.onError("FOOOO"));
  };

  console.log(handlePromise);

  return (
    <div>
      <button onClick={createHandler} id="btn-create-promise">
        Create Promise
      </button>
      <button onClick={resolveHandler} id="btn-resolve-promise">
        Resolve Promise
      </button>
      <button onClick={rejectHandler} id="btn-reject-promise">
        Reject Promise
      </button>
    </div>
  );
};

export default Lesson4;

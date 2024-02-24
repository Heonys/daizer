import { useState } from "react";

const MockupForm = () => {
  const [checked, setChecked] = useState(true);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex flex-col space-y-2 -translate-y-5 -translate-x-10 -rotate-x-[20deg] -rotate-z-12 shadow-2xl">
      <div className="form-control shadow-2xl">
        <label className="label cursor-pointer">
          <span className="label-text">Remember me</span>
          <input
            type="checkbox"
            className="toggle"
            checked={checked}
            onChange={() => setChecked(!checked)}
          />
        </label>
      </div>

      <label className="input input-bordered flex items-center gap-2 shadow-2xl">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="w-4 h-4 opacity-70"
        >
          <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
        </svg>
        <input
          type="text"
          className="grow shadow-2xl"
          placeholder="Username"
          value={name}
          onChange={({ target }) => setName(target.value)}
        />
      </label>
      <label className="input input-bordered flex items-center gap-2 shadow-2xl">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="w-4 h-4 opacity-70"
        >
          <path
            fillRule="evenodd"
            d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
            clipRule="evenodd"
          />
        </svg>
        <input
          type="password"
          className="grow shadow-2xl"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
        />
      </label>
    </div>
  );
};

export default MockupForm;

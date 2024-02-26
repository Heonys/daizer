import { useState } from "react";

const MockupForm = () => {
  const [checked, setChecked] = useState(true);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex flex-col space-y-2 -translate-y-[6vh] -translate-x-[1vw] -rotate-x-[20deg] -rotate-z-12 shadow-2xl">
      <label className="input input-bordered flex items-center gap-2 text-[1.02em]">
        Name
        <input type="text" className="grow text-[1.02em]" placeholder="Daisy" />
      </label>
      <label className="input input-bordered flex items-center gap-2 text-[1.02em]">
        Email
        <input type="text" className="grow text-[1.02em]" placeholder="daisy@site.com" />
      </label>
      <label className="input input-bordered flex items-center gap-2 text-[1.02em]">
        Password
        <input type="password" className="grow text-[1.02em]" placeholder="password" />
      </label>
    </div>
  );
};

export default MockupForm;

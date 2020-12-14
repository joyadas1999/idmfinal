import React from "react";
import CreateAccountForm from "../components/CreateAccountForm";

function CreateAccount({ CreateAccountFunction }) {
  return (
    <div>
      <h1 className="header">Drainers Create Your Account</h1>
      <CreateAccountForm CreateAccountForm={CreateAccountForm} />
    </div>
  );
}
export default CreateAccount;

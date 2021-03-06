import React from "react";
import { toCapitalize } from "../../utils/function/function";
import { InputAuthProps } from "./interface";

const InputAuthForm: React.FC<InputAuthProps> = ({
	name,
	handleChange,
	value,
	typeForm
}) => {
	return (
		<div className="mt-4">
			<label
				className="block mb-2 text-sm font-medium sm:text-lg text-gray-200"
				htmlFor={name}
			>
				{toCapitalize(name)}
			</label>
			<input
				name={name}
				className="block w-full px-4 py-2 border rounded-md text-gray-900 
                    border-gray-600 focus:ring-opacity-50 focus:border-blue-400 
                        focus:outline-none focus:ring focus:ring-blue-500"
				type={name}
				value={value}
				onChange={handleChange}
				placeholder={`Write your ${name}`}
			/>
			{name === "password" && value !== undefined && value.length > 0 && value.length < 10 && (
				<p className="text-red-600 font-semibold px-2 mb-3">
					Panjang password yang {typeForm !== "login" ? `dibuat` : `dimasukkan`} minimal 10 digit!
				</p>
			)}
		</div>
	);
};

export default InputAuthForm;

import { InputAdornment, MenuItem, Select, TextField } from "@mui/material";
import React, { useState } from 'react';
import { useForm } from '@formspree/react';


export default function Form(){

    const [state, handleSubmit] = useForm("mzzppzop");
    const [errors, setErrors] = useState({});

    if (state.succeeded) {
        window.location.href = "/thank-you"
        return;
    }

    const validateField = (name, value) => {
        let error = '';
        if (name === 'first_name') {
            if (!value) {
                error = 'First Name is required!';
            } else if (!/^[A-Za-z]+$/.test(value)) {
                error = 'First Name should contain only letters';
            }
        }
        if (name === 'last_name') {
            if (!value) {
                error = 'Last Name is required!';
            } else if (!/^[A-Za-z]+$/.test(value)) {
                error = 'Last Name should contain only letters';
            }
        }
        if (name === 'email') {
            if (!value) {
                error = 'Email is required!';
            } else if (!/\S+@\S+\.\S+/.test(value)) {
                error = 'Email is invalid';
            }
        }
        if (name === 'phone_number') {
            if (!value) {
                error = 'Phone Number is required!';
            } else if (!/^[0-9]{9}$/.test(value)) {
                error = 'Phone Number should contain exactly 9 digits';
            }
        }
        if (name === 'message' && !value) {
            error = 'Message is required!';
        }
               
        setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: error,
        }));
    };

    const handleBlur = (e) => {
        const { name, value } = e.target;
        validateField(name, value);
    };

    return(
        <>

            <form onSubmit={handleSubmit} className="bg-gray-500 border border-black-300 rounded-xl p-5 text-white">

                <div className="md:flex gap-5 pt-3">
                    <TextField
                        sx={{
                            mb: 3,
                            "& .MuiInputBase-root": {
                                color: 'text.secondary'
                            },
                            fieldset: {boarderColor: "rgb(231, 215, 240)"}
                        }}
                        fullWidth
                        id="first_name"
                        label="First Name"
                        name='first_name'
                        InputLabelProps={{
                            shrink: true,
                        }}
                        placeholder="First Name"
                        onBlur={handleBlur}
                        error={Boolean(errors.first_name)}
                        helperText={errors.first_name}
                        required
                    />

                    <TextField
                        sx={{
                            mb: 3,
                            "& .MuiInputBase-root": {
                                color: 'text.secondary'
                            },
                            fieldset: {boarderColor: "rgb(231, 215, 240)"}
                        }}
                        fullWidth
                        id="last_name"
                        label="Last Name"
                        name='last_name'
                        InputLabelProps={{
                            shrink: true,
                        }}
                        placeholder="Last Name"
                        onBlur={handleBlur}
                        error={Boolean(errors.last_name)}
                        helperText={errors.last_name}
                        required
                    />
                </div>

                <div className="flex gap-5">
                    <TextField
                        sx={{
                            mb: 3,
                            "& .MuiInputBase-root": {
                                color: 'text.secondary'
                            },
                            fieldset: {boarderColor: "rgb(231, 215, 240)"}
                        }}
                        fullWidth
                        id="email"
                        label="E-mail"
                        name='email'
                        InputLabelProps={{
                            shrink: true,
                        }}
                        placeholder="your@email.com"
                        onBlur={handleBlur}
                        error={Boolean(errors.email)}
                        helperText={errors.email}
                        required
                    />
                    <TextField
                        sx={{
                            mb: 3,
                            "& .MuiInputBase-root": {
                                color: 'text.secondary'
                            },
                            fieldset: {boarderColor: "rgb(231, 215, 240)"}
                        }}
                        fullWidth
                        id="phone_number"
                        label="Phone Number"
                        name='phone_number'
                        InputLabelProps={{
                            shrink: true,
                        }}
                        placeholder="987654321"
                        onBlur={handleBlur}
                        error={Boolean(errors.phone_number)}
                        helperText={errors.phone_number}
                        required
                        InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <Select
                                    sx={{ 
                                    '.MuiOutlinedInput-notchedOutline': {
                                            border: 'none',
                                      }, }}
                                    defaultValue="+251"
                                    >
                                    <MenuItem value="+1">+1</MenuItem>
                                    <MenuItem value="+251">+251</MenuItem>
                                    <MenuItem value="+254">+254</MenuItem>
                                    <MenuItem value="+44">+44</MenuItem>
                                    <MenuItem value="+919">+919</MenuItem>
                                    <MenuItem value="+971">+971</MenuItem>
                                </Select>
                              </InputAdornment>
                            ),
                        }}
                    />
                </div>

                <TextField
                        sx={{
                            mb: 3,
                            "& .MuiInputBase-root": {
                                color: 'text.secondary'
                            },
                            fieldset: {boarderColor: "rgb(231, 215, 240)"}
                        }}
                        fullWidth
                        multiline
                        rows={3}
                        id="message"
                        label="Message"
                        name='message'
                        type='text'
                        InputLabelProps={{
                            shrink: true,
                        }}
                        placeholder="Message"
                        onBlur={handleBlur}
                        error={Boolean(errors.message)}
                        helperText={errors.message}
                        required
                    />

                <button className="hover:opacity-60 bg-green-600 opacity-90 py-2 px-20 rounded-lg" type="send">Send</button>
            </form>

        </>
    )
}
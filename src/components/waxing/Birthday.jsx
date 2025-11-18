import { useState } from "react";
import { Typography, TextField, Button, Box } from "@mui/material";

export default function Birthday() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    birthday: "",
    number: "",
  });

  const handelChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault;
    console.log(formData);
  };
  return (
    <section className="flex flex-col justify-center items-center gap-8 my-20">
      <h2 className="mt-8 text-4xl md:text-5xl font-glo">
        Sign up for Exclusive Birthday Offers
      </h2>
      <div className="border-2 ">
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            display: "flex",
            flexDirection: "column",
            // borderRadius: 4,
            width: "100%",
            maxWidth: "500px",

            gap: 2,
            border: "6px solid candy",
            p: 4,
          }}
        >
          <TextField
            label="Full Name"
            name="name"
            value={formData.name}
            onChange={handelChange}
            sx={{
              borderRadius: "12px",
            }}
          />
          <TextField
            label="Email address"
            name="email"
            value={formData.email}
            onChange={handelChange}
            sx={{
              borderRadius: "12px",
            }}
          />
          <TextField
            label="Birthday"
            name="birthday"
            value={formData.birthday}
            onChange={handelChange}
            sx={{
              borderRadius: "12px",
            }}
          />
          <Button
            type="submit"
            sx={{
              backgroundColor: "#ff8fb6",
              color: "#fff",
              padding: "10px",
              borderRadius: "12px",
              fontWeight: "bold",
              border: "2px solid #ff8fb6",
              "&:hover": {
                backgroundColor: "#ff5fa3",
              },
            }}
          >
            Submit
          </Button>
        </Box>
      </div>
    </section>
  );
}

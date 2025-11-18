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
    <section className="flex flex-col justify-center items-center gap-10 my-20 bg-pink-100">
      <h2 className="mt-8 text-4xl md:text-5xl font-glo text-candy text-center">
        Sign up for Exclusive Birthday Offers
      </h2>
      <div className="border-2 scale-110 mb-20 rounded-2xl ">
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            display: "flex",
            borderRadius: 4,
            backgroundColor: "white",
            width: "100%",
            maxWidth: "900px",
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
            fullWidth
            sx={{
              borderRadius: "12px",
              background: "white",
            }}
          />
          <TextField
            label="Email address"
            name="email"
            value={formData.email}
            onChange={handelChange}
            fullWidth
            sx={{
              borderRadius: "12px",
              background: "white",
            }}
          />
          <TextField
            label="Birthday"
            name="birthday"
            value={formData.birthday}
            onChange={handelChange}
            fullWidth
            sx={{
              borderRadius: "12px",
              background: "white",
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

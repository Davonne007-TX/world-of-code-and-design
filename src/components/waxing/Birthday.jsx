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
    e.preventDefault();
    console.log(formData);
  };
  return (
    <section className="flex flex-col justify-center items-center gap-10  bg-pink-100">
      <h2 className="mt-8 text-4xl md:text-5xl font-glo text-candy text-center">
        Sign up for Exclusive Birthday Offers
      </h2>

      {/* <div className="flex">
        <img src="./images/pink2.jpg" alt="" className="max-w-md" />
        <img src="./images/pink.jpg" alt="" className="max-w-md" />
      </div> */}
      <div className="flex flex-col">
        <Box
          component="form"
          className="mx-auto"
          onSubmit={handleSubmit}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: { xs: "column", md: "row" },
            background: "white",
            width: "100%",
            maxWidth: { xs: "375px", md: "900px" },
            gap: 2,
            p: { xs: 2, md: 4 },
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
        <div className="flex flex-col md:flex-row">
          <img src="./images/pink2.jpg" alt="" className="max-w-md" />
          <img src="./images/pink.jpg" alt="" className="max-w-md" />
        </div>
      </div>
    </section>
  );
}

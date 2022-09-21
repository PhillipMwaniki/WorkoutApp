import React, {useState} from 'react';
import { Box } from "@mui/material";
import HeroBanner from "../components/HeroBanner.js";
import SearchExercises from "../components/SearchExercises.js";
import Exercises from "../components/Exercises.js";

const Home = () => {
    return (
        <Box>
            <HeroBanner />
            <SearchExercises />
            <Exercises />
        </Box>
    );
};

export default Home;

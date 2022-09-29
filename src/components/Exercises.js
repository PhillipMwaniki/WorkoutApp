import React,{useEffect, useState} from 'react';
import Pagination  from "@mui/material/Pagination";
import { Box, Stack, Typography } from "@mui/material";

import { exerciseOptions, fetchData } from "../utils/fetchData.js";
import ExerciseCard from "./ExerciseCard.js";

const Exercises = ({ exercises, bodyPart, setExercises }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const exercisesPerPage = 9;
    const indexOfLastExercise = currentPage * exercisesPerPage;
    const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
    const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);
    const paginate = (event, value) => {
        setCurrentPage(value);
        window.scrollTo({ top: '1800px', behavior: 'smooth' })
    }
    return (
        <Box id="exercises"
            sx={{
                mt: { lg: '110px'},

            }}
             mt="50px"
             p="20px"
        >
            <Typography variant="h3" mb="46px">Showing Results</Typography>
            <Stack
                direction="row"
                sx={{ gap: {lg: '110px', xs: '50px'}}}
                flexWrap="wrap" justifyContent="center"
            >
                {currentExercises.map((exercise, index) => (
                    <ExerciseCard key={index} exercise={exercise} />
                ))
                }
            </Stack>
            <Stack mt="100px" alignItems="center">
                {exercises.length > exercisesPerPage &&
                    ( <Pagination
                        color="standard"
                        shape="rounded"
                        count={Math.ceil(exercises.length / exercisesPerPage)}
                        page={currentPage}
                        onChange={paginate}
                        size="large"
                    />)
                }
            </Stack>
        </Box>
    );
};

export default Exercises;

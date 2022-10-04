import React, {useEffect, useState} from 'react';
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import Detail from '../components/Detail';
import ExerciseVideos from '../components/ExerciseVideos';
import SimilarExercises from '../components/SimilarExercises';
import { exerciseOptions, fetchData, youtubeOptions } from '../utils/fetchData';


const ExerciseDetail = () => {
    const [exerciseDetail, setExerciseDetail] = useState({})
    const [exercisesVideos, setExercisesVideos] = useState({})
    const { id } = useParams();

    useEffect(() => {
      const fetchExercisesData = async () => {
            const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
            const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com'

            const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions);
            setExerciseDetail(exerciseDetailData);
            const exercisesVideoData = await fetchData(`${youtubeSearchUrl}/search?q=${exerciseDetailData.name}`, youtubeOptions);
            setExercisesVideos(exercisesVideoData);
      }

      fetchExercisesData();

    }, [id])

    return (
        <div>
            <Detail exerciseDetail={exerciseDetail} />
            <ExerciseVideos exercisesVideos={exercisesVideos} name={exerciseDetail.name} />
            <SimilarExercises />
        </div>
    );
};

export default ExerciseDetail;

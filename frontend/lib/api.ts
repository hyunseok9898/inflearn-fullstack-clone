"use server";

import {
  categoriesControllerFindAll,
  coursesControllerCreate,
  coursesControllerFindAll,
  coursesControllerFindOne,
  coursesControllerUpdate,
  UpdateCourseDto,
} from "@/generated/openapi-client";

export const getAllCategories = async () => {
  const { data, error } = await categoriesControllerFindAll();

  return {
    data,
    error,
  };
};

export const getAllInstructorCourses = async () => {
  const { data, error } = await coursesControllerFindAll();

  return {
    data,
    error,
  };
};

export const getCourseById = async (id: string, include?: string) => {
  const { data, error } = await coursesControllerFindOne({
    path: {
      id,
    },
    query: {
      include: include ?? "sections,lectures",
    },
  });

  return {
    data,
    error,
  };
};

export const createCourse = async (title: string) => {
  const { data, error } = await coursesControllerCreate({
    body: {
      title,
    },
  });

  return {
    data,
    error,
  };
};

export const updateCourse = async (
  id: string,
  updateCourseDto: UpdateCourseDto,
) => {
  const { data, error } = await coursesControllerUpdate({
    path: {
      id,
    },
    body: updateCourseDto,
  });

  return { data, error };
};

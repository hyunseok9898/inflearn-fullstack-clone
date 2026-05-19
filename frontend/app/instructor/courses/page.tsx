import * as api from "@/lib/api";
import UI from "@/app/instructor/courses/ui";

export default async function InstructorCoursesPage() {
  const { data: courses } = await api.getAllInstructorCourses();

  return <UI courses={courses ?? []} />;
}

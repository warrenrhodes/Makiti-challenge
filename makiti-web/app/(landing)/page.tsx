import { CourseView } from "@/components/course";
import { CreateCourse } from "@/components/create_course";
import { Card } from "@/components/ui/card";
import { Course } from "@/lib/models/course";

export default async function Home() {
  const courses = await fetch(`http://localhost:3000/api/get-courses`, {
    cache: "no-store",
  });
  const data = (await courses.json()) as Course[];

  return (
    <main className="min-h-screen flex flex-col">
      <div className="flex h-96 w-full bg-gradient-to-br from-[#e2ebe6ac] to-[#9394a65b] justify-start items-center">
        <Card className="w-[550px] h-3/5  align-middle p-10 m-10 overflow-hidden rounded-none">
          <h3 className="text-3xl font-bold ">Jump into learning for less</h3>
          <p>
            If you’re new to Makiti training, we’ve got good news: For a limited
            time, courses start at just $13.99 for new learners! Shop now.
          </p>
        </Card>
      </div>
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-3xl font-bold ">A broad selection of courses</h2>
        <p>
          Choose from over 210,000 online video courses with new additions
          published every month
        </p>
        <CourseList courseList={data} />
        <div className="fixed bottom-4 right-4">
          <CreateCourse />
        </div>
      </div>
    </main>
  );
}

const CourseList = (props: { courseList: Course[] }) => {
  return (
    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
      {props.courseList.map((value) => {
        return <CourseView course={value} key={value.name} />;
      })}
    </div>
  );
};

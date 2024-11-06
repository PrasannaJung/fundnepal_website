import api from "@/api/api";
import NavBar from "@/components/custom/NavBar";
import useAuth from "@/hooks/useAuth";
import React, { useState } from "react";
import toast from "react-hot-toast";

function CreateProject() {
  const auth = useAuth();

  const [category, setCategory] = useState("");
  const [projectTitle, setProjectTitle] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [projectGoal, setProjectGoal] = useState("");
  const [projectDeadline, setProjectDeadline] = useState("");
  const [projectImage, setProjectImage] = useState<File | string>("");
  const [previewImage, setPreviewImage] = useState("");

  // create a handle image change function compatible with typescript
  const handleImageChange = (e: React.FormEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    const file = target.files?.[0];

    if (file) {
      setProjectImage(file);
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log({
      category,
      projectTitle,
      projectDescription,
      projectGoal,
      projectDeadline,
      projectImage,
    });

    // create a new FormData object
    const formData = new FormData();
    // append the form data
    formData.append("projectCategory", category);
    formData.append("projectTitle", projectTitle);
    formData.append("projectDescription", projectDescription);
    formData.append("projectGoal", projectGoal);
    formData.append("projectDeadline", projectDeadline);
    formData.append("projectImage", projectImage);

    api
      .post("/api/project/create", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${auth.token}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        toast.success("Project created successfully");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className='h-screen'>
      <NavBar />
      <div className=' w-2/3 mx-auto text-xl flex flex-col justify-center items-center'>
        <h1 className='text-4xl font-bold e my-6'>
          Bring Your <span className='text-blue-400'>Ideas to Life</span>
        </h1>
        <div>
          <h2 className='text-3xl  font-semibold text-center'>
            Begin Your Journey with us
          </h2>
        </div>
        <form onSubmit={handleSubmit} className='flex gap-12 mt-5'>
          <div>
            <div className='flex flex-col '>
              <label htmlFor='category '> Category </label>
              <select
                name='category'
                id='category'
                className='border w-full text-black border-gray-300 p-2 rounded-md'
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value=''>Select a category</option>
                <option value='Technology'>Technology</option>
                <option value='Art'>Art</option>
                <option value='Food'>Food</option>
                <option value='Music'>Music</option>
                <option value='Fashion'>Fashion</option>
              </select>
            </div>
            <div className=''>
              <label htmlFor='projectTitle '> Project Title </label>
              <input
                type='text'
                name='projectTitle'
                id='projectTitle'
                className='w-full border text-black border-gray-300 p-2 rounded-md'
                placeholder='Enter your project title'
                value={projectTitle}
                onChange={(e) => setProjectTitle(e.target.value)}
              />
            </div>
            <div className=''>
              <label htmlFor='projectDescription '> Project Description </label>
              <textarea
                name='projectDescription'
                id='projectDescription'
                className='border border-gray-300 text-black p-2 rounded-md w-full'
                placeholder='Enter your project description'
                value={projectDescription}
                onChange={(e) => setProjectDescription(e.target.value)}
              />
            </div>
            <div className=''>
              <label htmlFor='projectGoal '> Project Goal </label>
              <input
                type='number'
                name='projectGoal'
                id='projectGoal'
                className='border text-black border-gray-300 p-2 rounded-md w-full'
                placeholder='Enter your project goal'
                value={projectGoal}
                onChange={(e) => setProjectGoal(e.target.value)}
              />
            </div>
            <div className=''>
              <label htmlFor='projectDeadline '> Project Deadline </label>
              <input
                type='date'
                name='projectDeadline'
                id='projectDeadline'
                className='border text-black border-gray-300 p-2 rounded-md w-full'
                value={projectDeadline}
                onChange={(e) => setProjectDeadline(e.target.value)}
              />
            </div>
          </div>
          <div>
            <div className=''>
              <label htmlFor='projectImage '> Project Image </label>
              <input
                type='file'
                name='projectImage'
                id='projectImage'
                className='border border-white p-2 rounded-md w-full'
                onChange={handleImageChange}
              />
            </div>
            <div className='w-48 h-48 border-white my-6'>
              {previewImage ? (
                <img
                  src={previewImage}
                  alt='project'
                  className='w-full h-full object-cover'
                />
              ) : (
                <div className='flex border-gray-100 border-2 justify-center items-center w-full h-full  text-xl'>
                  <span>No image selected</span>
                </div>
              )}
            </div>
            <button
              type='submit'
              className='bg-blue-400  px-4 py-2 rounded-md mt-10 w-full'
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateProject;

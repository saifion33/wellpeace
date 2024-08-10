import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux-hooks.ts";
import { LuLoader2 } from "react-icons/lu";
import { FaUsers } from "react-icons/fa";
import { createChannel } from "../../redux/actions/channels.ts";
import { toast } from "react-toastify";
import { useEffect } from "react";

const initialValues: ICreateChannelFormData = {
  name: "",
  description: "",
  imageUrl: "",
};
function CreateChannel() {
  const navigate = useNavigate();
  const dispatch=useAppDispatch();
  const { loading } = useAppSelector((state) => state.channnels);
  const user = useAppSelector((state) => state.auth.user);
  const ValidationSchema = yup.object({
    name: yup
      .string()
      .min(3, "channel name should be atleast 3 character.")
      .required("Name is required"),
      description:yup.string().min(10,"description should be atleast 10 characters.").required("Description is required.")
  });

  const handleSubmit = (
    values: ICreateChannelFormData,
    { resetForm }: FormikHelpers<ICreateChannelFormData>
  ) => {
    if (!user) {
        toast.error('Login Please.',{autoClose:1500})
        return 
    }
    const data={...values,uid:user?.uid}
    dispatch(createChannel(data)).then(res=>{
        if (createChannel.fulfilled.match(res)) {
            resetForm();
            navigate('/community')
        }else if(createChannel.rejected.match(res)) {
            toast.error(res.payload?.message,{autoClose:1500});
        }
    })
  };
  useEffect(()=>{
    if (!user) {
      toast.info('Login to Access this feature',{autoClose:1500})
      navigate('/login')
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  return (
    <section className="bg-custom-background-gradient relative min-h-screen flex items-center justify-center flex-wrap pt-6 pb-14">
      <div className="lg:w-1/2">
        <div className="mx-auto w-fit max-w-md lg:mb-24  lg:block">
          <h1 className="text-5xl font-montserrat drop-shadow-md font-bold text-[#FFF5E9] lg:tracking-wide">
            wellpeace
          </h1>
          <h2 className="text-center mt-2 font-montserrat drop-shadow-md  tracking-tight  font-bold text-[#FFF5E9]">
            Connect.Learn.Thrive
          </h2>
        </div>
        <div className="flex justify-center mt-6 lg:mt-16 mb-2 lg:mb-4">
          <FaUsers className="text-9xl text-stone-50" />
        </div>
      </div>

      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={ValidationSchema}
      >
        <Form className="space-y-2 lg:space-y-5 mt-6 lg:mt-10 mx-auto bg-stone-50 bg-opacity-20 border-[1px] border-stone-50 backdrop-blur-md px-6 py-6 lg:py-12 lg:px-12 rounded-md lg:w-[400px] max-w-[400px] ">
          <div>
            <Field
              placeholder="Enter channel Name"
              id="name"
              name="name"
              type="text"
              required
              className="block w-full focus:outline-none  py-2 text-[#FFF5E9] border-b-2 border-stone-50 bg-transparent  placeholder:text-[#FFF5E9]"
            />
            <div className="h-4 pt-2">
              <ErrorMessage
                className="text-xs text-red-500"
                name="name"
                component={"div"}
              />
            </div>
          </div>
          <div>
            <Field
              placeholder="Enter Description"
              id="description"
              name="description"
              type="text"
              required
              className="block w-full focus:outline-none  py-2 text-[#FFF5E9] border-b-2 border-stone-50 bg-transparent  placeholder:text-[#FFF5E9]"
            />
            <div className="h-4 pt-2">
              <ErrorMessage
                className="text-xs text-red-500"
                name="description"
                component={"div"}
              />
            </div>
          </div>
          <div>
            <Field
              placeholder="Paste Image url"
              id="imageUrl"
              name="imageUrl"
              type="text"
              required
              className="block w-full focus:outline-none  py-2 text-[#FFF5E9] border-b-2 border-stone-50 bg-transparent  placeholder:text-[#FFF5E9]"
            />
            <div className="h-4 pt-2">
              <ErrorMessage
                className="text-xs text-red-500"
                name="imageUrl"
                component={"div"}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={loading}
              className="flex w-full mt-5 lg:mt-0 text-sm lg:text-base justify-center items-center gap-3 rounded-full bg-[#4274c2] hover:bg-[#477cd0] px-3 py-1 leading-6 text-[#FFF5E9] "
            >
              Create
              {loading && <LuLoader2 className="text-stone-50 animate-spin" />}
            </button>
          </div>
        </Form>
      </Formik>

      <button
        onClick={() => navigate("/")}
        className="absolute bottom-0 right-4 text-stone-50 tracking-wide "
      >
        Skip
      </button>
    </section>
  );
}

export default CreateChannel;

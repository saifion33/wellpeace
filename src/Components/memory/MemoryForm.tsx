import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';
import { FaCircleCheck } from 'react-icons/fa6';
import { ImSpinner2 } from 'react-icons/im';
import * as yup from 'yup'
interface IProps{
    onSubmit: (values: IMemoryForm, formikHelpers: FormikHelpers<IMemoryForm>) => void;
    fileToUpload:File|null;
    handleCancel:()=>void;
    isFileUploading:boolean;
}

const MemoryForm = ({onSubmit,fileToUpload,handleCancel,isFileUploading}:IProps) => {
    const initialValue:IMemoryForm={
        feelings:"",
        date:"",
        tags:"",
    }
    const validationSchema=yup.object({
        feelings:yup.string().min(10,'Feelings length must be atleast 10 characters.').max(200,'Feelings length must be less than 200 characters').required("Feelings are required."),
    })
    return (
        <Formik initialValues={initialValue} onSubmit={onSubmit} validationSchema={validationSchema} >
            <Form className='w-full p-3 text-stone-50 mt-5 space-y-4 border-t'>
                <div className='w-full space-y-1 '>
                    <label htmlFor="feelings">What You Feel About This Memory.</label>
                    <Field  className="w-full bg-transparent focus:outline-none border-b-2 p-1 border-stone-50" name="feelings" id="feelings" as={"textarea"} />
                    <ErrorMessage className='text-xs text-red-600 h-4' component={'div'} name='feelings' />
                </div>
                <div className='w-full space-y-1'>
                    <label htmlFor="tags">Tags</label>
                    <Field placeholder="Enter comma separated tags"  className="w-full bg-transparent focus:outline-none border-b-2 p-1 placeholder:text-stone-50 placeholder:text-sm border-stone-50" name="tags" id="tags" />
                    <ErrorMessage className='text-xs text-red-600 h-4' component={'div'} name='tags' />
                </div>
                <div className='flex items-center gap-2'>
                    <label htmlFor="date">Event Date: </label>
                    <Field className="bg-transparent focus:outline-none" name="date" id="date" type="date"/>
                </div>
                {
              (fileToUpload) && <div className="flex justify-center gap-3 w-full ">
                <button disabled={isFileUploading} type='reset' onClick={handleCancel} className="bg-stone-50 disabled:cursor-not-allowed  bg-opacity-30 backdrop-blur-lg border  text-stone-50 py-1 px-3 rounded">Cancel</button>
                <button disabled={isFileUploading} type='submit' className=" bg-pinkishPurple border border-stone-50 disabled:cursor-progress py-1 px-3 rounded flex items-center gap-2">
                  Upload {isFileUploading?<ImSpinner2 className="animate-spin" />:<FaCircleCheck />}
                </button>
              </div>
            }
            </Form>
        </Formik>
    )
}

export default MemoryForm
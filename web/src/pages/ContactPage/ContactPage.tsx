import { MetaTags, useMutation } from '@redwoodjs/web'
import { toast, Toaster } from '@redwoodjs/web/toast'
import {
  FieldError,
  Form,
  FormError,
  Label,
  TextField,
  TextAreaField,
  useForm,
  Submit,
  SubmitHandler,
} from '@redwoodjs/forms'
import styles from 'src/pages/ContactPage/contactPage.module.css'

import {
  CreateContactMutation,
  CreateContactMutationVariables,
} from 'types/graphql'

const CREATE_CONTACT = gql`
  mutation CreateContactMutation($input: CreateContactInput!) {
    createContact(input: $input) {
      id
    }
  }
`

interface FormValues {
  name: string
  email: string
  message: string
}

const ContactPage = () => {
  const formMethods = useForm()
  const [create, { loading, error }] = useMutation<
    CreateContactMutation,
    CreateContactMutationVariables
  >(CREATE_CONTACT, {
    onCompleted: () => {
      toast.success('Thank you for your submission!')
      formMethods.reset()
    },
  })

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    create({ variables: { input: data } })
  }

  return (
    <>
      <MetaTags title="Contact" description="Contact page" />
      <Toaster />
      <Form
        onSubmit={onSubmit}
        config={{ mode: 'onBlur' }}
        error={error}
        formMethods={formMethods}
        className={styles.form}
      >
        <h2>Send Derek a message:</h2>
        <FormError error={error} wrapperClassName="form-error" />
        <div className={styles.formRow}>
          <Label name="name" errorClassName="error">
            Name
          </Label>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <FieldError
              style={{
                fontSize: '12px',
                color: '#d50000',
                textAlign: 'center',
              }}
              name="name"
              className="error"
            />
            <TextField
              name="name"
              validation={{ required: true }}
              errorClassName="error"
            />
          </div>
        </div>

        <div className={styles.formRow}>
          <Label name="email" errorClassName="error">
            Email
          </Label>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <FieldError
              style={{
                fontSize: '12px',
                color: '#d50000',
                textAlign: 'center',
              }}
              name="email"
              className="error"
            />
            <TextField
              name="email"
              validation={{
                required: true,
                pattern: {
                  value: /^[^@]+@[^.]+\..+$/,
                  message: 'Please enter a valid email address',
                },
              }}
              errorClassName="error"
            />
          </div>
        </div>

        <div className={styles.formRow}>
          <Label name="message" errorClassName="error">
            Whats up?
          </Label>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <FieldError
              style={{
                fontSize: '12px',
                color: '#d50000',
                textAlign: 'center',
              }}
              name="message"
              className="error"
            />
            <TextAreaField
              name="message"
              validation={{ required: true }}
              errorClassName="error"
            />
          </div>
        </div>

        <Submit disabled={loading}>Save</Submit>
      </Form>
    </>
  )
}

export default ContactPage

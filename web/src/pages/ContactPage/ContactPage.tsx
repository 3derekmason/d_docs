import { MetaTags } from '@redwoodjs/web'
import {
  FieldError,
  Form,
  Label,
  TextField,
  TextAreaField,
  Submit,
  SubmitHandler,
} from '@redwoodjs/forms'
import styles from 'src/pages/ContactPage/contactPage.module.css'

interface FormValues {
  name: string
  email: string
  message: string
}

const ContactPage = () => {
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data)
  }

  return (
    <>
      <MetaTags title="Contact" description="Contact page" />

      <Form
        onSubmit={onSubmit}
        config={{ mode: 'onBlur' }}
        className={styles.form}
      >
        <h2>Send Derek a message:</h2>
        <div className={styles.formRow}>
          <Label name="name" errorClassName="error">
            Name
          </Label>
          <TextField
            name="Name"
            validation={{ required: true }}
            errorClassName="error"
          />
        </div>
        <FieldError
          style={{ fontSize: '12px', color: '#d50000', textAlign: 'center' }}
          name="Name"
          className="error"
        />
        <div className={styles.formRow}>
          <Label name="email" errorClassName="error">
            Email
          </Label>
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
        <FieldError
          style={{ fontSize: '12px', color: '#d50000', textAlign: 'center' }}
          name="email"
          className="error"
        />
        <div className={styles.formRow}>
          <Label name="message" errorClassName="error">
            Whats up?
          </Label>
          <TextAreaField
            name="Message"
            validation={{ required: true }}
            errorClassName="error"
          />
        </div>
        <FieldError
          style={{ fontSize: '12px', color: '#d50000', textAlign: 'center' }}
          name="Message"
          className="error"
        />

        <Submit>Save</Submit>
      </Form>
    </>
  )
}

export default ContactPage

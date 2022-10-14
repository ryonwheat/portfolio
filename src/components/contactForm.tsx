import React, { Component, SyntheticEvent } from "react"

class ContactForm extends Component<{}, {}> {
  constructor(props: any) {
    super(props)
    this.state = {
      //   firstName: "",
      //   lastName: "",
      //   email: "",
      //   message: "",
      fieldValues: {
        firstName: "",
        lastName: "",
        companyName: "",
        email: "",
        howDidYouFindMe: "",
        message: "",
      },
      fieldErrors: { firstName: "", lastName: "", email: "" },
      validForm: false,
      response: null,
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event: SyntheticEvent) {
    const { name, value }: any = event.target
    let fields = this.state.fieldValues
    fields[name] = value

    console.log("change: " + name, value)
    this.setState({ fieldValues: fields }, () => {
      //        this.setState({ [name]: value }, () => {
      this.state.validForm = this.validateField(name, value)
    })
  }

  handleSubmit = async event => {
    console.log("submit - this.state: " + this.state)
    event.preventDefault()

    if (this.validateForm()) {
      this.invokePost()
        .then(res => this.setState({ response: res }))
        .catch(err => console.log("error: " + err))
    } else {
    }
  }

  invokePost = async () => {
    try {
      let payload = {
        firstName: this.state.fieldValues.firstName,
      }

      const response = await fetch("/api/send-email/", {
        method: "POST",
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "omit", // include, *same-origin, omit
        headers: { "Content-Type": "application/json" },
        redirect: "follow", // manual, *folslow, error
        referrer: "client", // no-referrer, *client
        body: JSON.stringify(payload),
      })
      const body = await response.json()

      if (response.status !== 200 || body.success === false) {
        console.log("ERROR: response.status: " + response.status)
        throw Error(body.message)
      }

      console.log("invokePost.body: " + JSON.stringify(body))
      return body
    } catch (err) {
      console.log("Error: " + err)
    }
  }

  invokeGet = async () => {
    try {
      const response = await fetch("/api/express_backend")
      const body = await response.json()

      if (response.status !== 200) {
        console.log("ERROR: response.status: " + response.status)
        throw Error(body.message)
      }
      console.log("invokeGet.body: " + JSON.stringify(body))
      return body
    } catch (err) {
      console.log("Error: " + err)
    }
  }

  validateField(name: string, value: string) {
    let isValid = true
    let fieldErrors = this.state.fieldErrors

    switch (name) {
      case "firstName":
        fieldErrors.firstName =
          value.trim().length === 0 ? "Please enter your first name." : ""
        if (fieldErrors.firstName.length > 0) {
          isValid = false
        }
        break
      case "lastName":
        fieldErrors.lastName =
          value.trim().length === 0 ? "Please enter your last name." : ""
        if (fieldErrors.lastName.length > 0) {
          isValid = false
        }
        break
      case "email":
        fieldErrors.email =
          value.trim().length === 0 ? "Please enter your email." : ""
        if (fieldErrors.email.length > 0) {
          isValid = false
        }
        break
      default:
        break
    }
    console.log(
      "validateField errors: " + name,
      value,
      JSON.stringify(fieldErrors)
    )
    this.setState({ fieldErrors: fieldErrors })
    return isValid
  }

  validateForm() {
    let isValid = true

    Object.entries(this.state.fieldValues).forEach(([key, value]) => {
      // console.log(`${key} ${value}`)
      console.log(key, value)
      if (!this.validateField(key, value)) {
        isValid = false
      }
    })

    // let errors = this.state.fieldErrors
    // if (this.state.fieldValues.firstName === "") {
    //   errors.firstName = "Please enter your first name."
    //   isValid = false
    // }
    // if (this.state.fieldValues.lastName === "") {
    //   errors.lastName = "Please enter your last name."
    //   isValid = false
    // }
    // this.setState({ fieldErrors: errors })
    return isValid
  }

  render() {
    return (
      <div className="row justify-content-center">
        <div className="col10">
          <form onSubmit={this.handleSubmit}>
            <div className="row">
              <div className="col form-group">
                <input
                  className="form-input form-control"
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="First Name"
                  value={this.state.fieldValues.firstName}
                  onChange={this.handleChange}
                />
                {/* <label className="form-label" htmlFor="firstName">
                  First Name
                </label> */}
                {/* <div className="error-text">
                  {this.state.fieldErrors.firstName}
                </div> */}
              </div>
              <div className="col form-group">
                <input
                  className="form-input form-control"
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="Last Name"
                  value={this.state.fieldValues.lastName}
                  onChange={this.handleChange}
                />
                {/* <label className="form-label" htmlFor="lastName">
                  Last Name
                </label>
                <div className="error-text">{this.state.fieldErrors.lastName}</div> */}
              </div>
            </div>
            <div class="row">
              <div className="col form-group">
                <input
                  className="form-input form-control"
                  type="text"
                  id="email"
                  name="email"
                  placeholder="Email"
                  value={this.state.fieldValues.email}
                  onChange={this.handleChange}
                />
                {/* <label className="form-label" htmlFor="email">
                  Email
                </label>
                <div className="error-text">{this.state.fieldErrors.email}</div> */}
              </div>
              {/* <div className="col form-group">
                <input
                  className="form-input form-control"
                  type="text"
                  id="howDidYouFindMe"
                  name="howDidYouFindMe"
                  value={this.state.fieldValues.howDidYouFindMe}
                  onChange={this.handleChange}
                />
                <label className="form-label" htmlFor="howDidYouFindMe">
                  How did you find me?
                </label>
              </div> */}
            </div>
            <div className="col form-group">
              <textarea
                className="form-input form-control"
                id="message"
                name="message"
                placeholder="Your message"
                value={this.state.fieldValues.message}
                onChange={this.handleChange}
              />
              {/* <label className="form-label" htmlFor="message">
                Message
              </label> */}
            </div>
            <div className="center">
              <button
                className="gradient-button"
                type="submit"
                disabled={!this.state.validForm}
              >
                Contact
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default ContactForm

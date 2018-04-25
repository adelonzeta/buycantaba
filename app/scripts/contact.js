import $ from 'jquery'
import firebase from 'firebase'

const contact = {
  data: {
    form: {},
    slack: {
      text: 'New inquiry alert!',
      attachments: []
    },
  },
  cacheDom() {
    this.$form      = $('#contact-form')
    this.$button    = $('#contact-button')
    this.$type      = $('#contact-type')
    this.$name      = $('#contact-name')
    this.$email     = $('#contact-email')
    this.$phone     = $('#contact-number')
    this.$reference = $('#contact-reference')
    this.$message   = $('#contact-message')
  },
  init() {
    this.cacheDom()
    this.bindEvents()
    this.getID()
  },
  bindEvents() {
    this.$form.on('submit', this.submit.bind(this))
  },
  getID() {
    let param = window.location.search.slice(1)
    let id = param.slice(4, param.length)
    if (id) this.data.form.id = id
  },
  setValues() {
    this.data.form.type = this.$type.val()
    this.data.form.name = this.$name.val()
    this.data.form.email = this.$email.val()
    this.data.form.phone = this.$phone.val()
    this.data.form.reference = this.$reference.val()
    this.data.form.message = this.$message.val()

    this.data.slack.username = this.$name.val()
    this.data.slack.text     = `New ${this.$type.val()} alert!`
    this.data.slack.attachments.push({
      title: 'Email',
      text: this.$email.val()
    })
    if (this.$phone.val()) {
      this.data.slack.attachments.push({
        title: 'Phone',
        text: this.$phone.val()
      })
    }
    if (this.$message.val()) {
      this.data.slack.attachments.push({
        title: 'Message',
        text: this.$message.val()
      })
    }
    if (this.$reference.val()) {
      this.data.slack.attachments.push({
        title: 'Reference',
        text: this.$reference.val()
      })
    }
  },
  submit() {
    this.$button.attr('disabled', true)
    this.$button.html('Submitting...')

    this.setValues()

    firebase.database().ref().push().set(this.data.form).then(() => {
      let url = 'https://hooks.slack.com/services/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'
      $.ajax({
        data: 'payload=' + JSON.stringify(this.data.slack),
        dataType: 'json',
        processData: false,
        type: 'POST',
        url: url,
        complete: () => {
          this.$button.html('Sent Successfully!')
          setTimeout(() => {
            this.$name.val('')
            this.$email.val('')
            this.$phone.val('')
            this.$reference.val('')
            this.$message.val('')
            this.$button.attr('disabled', false)
            this.$button.html('Submit')
          }, 2000)
        }
      })
    }).catch(error => {
      alert(error.message)
    })

    return false
  }
}

export default contact

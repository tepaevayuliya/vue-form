<template>
  <div class="home">
    <img alt="Vue log" src="../assets/log.png">
    <MyLabel msg="Фамилия"/>
    <my-input
      :placeholder="form.surname.placeholder"
      :error="form.surname.error"
      :value="form.surname.value"
    />
    <MyLabel msg="Имя"/>
    <my-input
      :placeholder="form.name.placeholder"
      :error="form.name.error"
      :value="form.name.value"
    />
    <MyLabel msg="Телефон"/>
    <my-input
      :placeholder="form.phone.placeholder"
      :error="form.phone.error"
      :value="form.phone.value"
    />
    <MyLabel msg="e-mail"/>
    <my-input
      :placeholder="form.email.placeholder"
      :error="form.email.error"
      :value="form.email.value"
    />
    <MyButton ms="Оправить"/>
  </div>

</template>

<script>
// @ is an alias to /src
import MyLabel from '@/components/ui/my-label.vue'
import MyInput from '@/components/ui/my-input.vue'
import MyButton from '@/components/ui/my-button.vue'

export default {
    name: 'home',
    data () {
        return {
            form: {
                name: {
                    placeholder: 'Введите имя',
                    value: '',
                    validator: {
                        maxLength: 10
                    },
                    error: null
                },
                surname: {
                    placeholder: 'Введите фамилию',
                    value: '',
                    validator: {
                        maxLength: 10
                    },
                    error: null
                },
                phone: {
                    placeholder: 'Введите телефон',
                    value: '',
                    validator: {
                        maxLength: 11
                    },
                    error: null
                },
                email: {
                    placeholder: 'Введите email',
                    value: '',
                    error: null
                }
            }

        }
    },
    components: {
        MyButton,
        MyLabel,
        MyInput
    }
}
</script>

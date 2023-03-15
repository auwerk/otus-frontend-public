<template>
  <div class="register-user">
    <form>
      <table>
        <tr>
          <td class="prop-key">Имя пользователя</td>
          <td><input v-model="newProfile.userName" placeholder="vanya"/></td>
        </tr>
        <tr>
          <td class="prop-key">Адрес электронной почты</td>
          <td><input v-model="newProfile.email" placeholder="vanya@mail.ru"/></td>
        </tr>
        <tr>
          <td class="prop-key">Имя</td>
          <td><input v-model="newProfile.firstName" placeholder="Иван"/></td>
        </tr>
        <tr>
          <td class="prop-key">Фамилия</td>
          <td><input v-model="newProfile.lastName" placeholder="Иванов"/></td>
        </tr>
        <tr>
          <td class="prop-key">Дата рождения</td>
          <td><input v-model="newProfile.birthDate" placeholder="1961-01-01"/></td>
        </tr>
        <tr>
          <td class="prop-key">Номер телефона</td>
          <td><input v-model="newProfile.phoneNumber" placeholder="454545"/></td>
        </tr>
        <tr>
          <td class="prop-key">Пароль</td>
          <td><input v-model="newProfile.password" type="password"/></td>
        </tr>
        <tr>
          <td>
            <button :disabled="inRequest" v-on:click="signUp">Зарегистрировать пользователя</button>
          </td>
          <td><span class="error-message">{{ errorMessage }}</span></td>
        </tr>
      </table>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'RegisterUser',
  data() {
    return {
      inRequest: false,
      errorMessage: '',
      newProfile: {
        userName: '',
        email: '',
        firstName: '',
        lastName: '',
        birthDate: '',
        phoneNumber: '',
        password: '',
      }
    }
  },
  methods: {
    signUp() {
      this.errorMessage = '';
      this.inRequest = true;
      axios.post('/api/user/register', this.newProfile).then(function(response) {
        console.log(response);
        this.inRequest = false;
        window.location.replace('/account');
      }.bind(this)).catch(function(response) {
        console.log(response);
        this.errorMessage = 'Ошибка при регистрации';
        this.inRequest = false;
      }.bind(this));
    }
  }
}
</script>

<style>
td.prop-key {
  text-align: right;
}

span.error-message {
  color: red;
  font-style: italic;
}
</style>
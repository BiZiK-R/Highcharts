import StoreModule from '@src/services/store/module';

class ReposState extends StoreModule {
  initState() {
    return {
      items: [],
      wait: false,
      errors: null,
    };
  }

  /**
   * Загрузка списка из апи
   * @param params Параметры запроса
   * @returns {Promise<*>}
   */
  async loadRepos(user) {
    this.updateState({ wait: true, errors: null }, 'Статус ожидания');
    try {
      const response = await this.services.api.get('users').getRepos(user);
      const result = response.data;
      this.updateState(
        { items: result, wait: false, errors: null },
        'Репозитории загружены',
      );
      return result;
    } catch (e) {
      if (e.response?.data?.error?.data) {
        this.updateState(
          { wait: false, errors: e.response.data.error.data.issues },
          'Ошибка от сервера',
        );
      } else {
        throw e;
      }
    }
  }
}

export default ReposState;

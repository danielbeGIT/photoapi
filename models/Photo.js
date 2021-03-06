// Photo model

module.exports = (bookshelf) => {
	return bookshelf.model('Photo', {
		tableName: 'photos',
		albums() {
			return this.belongsToMany('Album');
		},
		users() {
			return this.belongsTo('User');
		}
	}, {
		async fetchById(id, fetchOpt = {}) {
			return await new this({ id }).fetch(fetchOpt);
		}
	});
};
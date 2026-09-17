using System.Collections.Generic;
using System.Data.Common;
using NetCity.Common.Implementation.Data;

namespace NS_DataAccess.Helpers
{
	/// <summary>
	/// Билдер DataSetAdapter <see cref="DataSetAdapter"/>
	/// </summary>
	public class DataSetAdapterBuilder
	{
		private readonly DbCommandInfo _coreDbCommandInfo = new DbCommandInfo();
		private readonly List<TableRelation> _relations = new List<TableRelation>();

		private bool _dbParamsDefined;

		/// <summary>
		/// Установка текста sql запроса
		/// </summary>
		/// <param name="sql">текст запроса</param>
		/// <returns>билдер</returns>
		public DataSetAdapterBuilder Sql(string sql)
		{
			_coreDbCommandInfo.Sql = sql;
			return this;
		}

		/// <summary>
		/// Установка таймаута
		/// </summary>
		/// <param name="timeOut">таймаут соединения</param>
		/// <returns>билдер</returns>
		public DataSetAdapterBuilder Timeout(int timeOut)
		{
			_coreDbCommandInfo.TimeOut = timeOut;
			return this;
		}

		/// <summary>
		/// Добавление db параметра
		/// </summary>
		/// <param name="param">db параметр</param>
		/// <returns>билдер</returns>
		public DataSetAdapterBuilder AddParam(DbParameter param)
		{
			_coreDbCommandInfo.DbParams.Add(param);
			_dbParamsDefined = true;
			return this;
		}

		/// <summary>
		/// Добавление db параметра
		/// </summary>
		/// <param name="param">db параметр</param>
		/// <returns>билдер</returns>
		public DataSetAdapterBuilder AddParam(object param)
		{
			_coreDbCommandInfo.Params.Add(param);
			return this;
		}

		/// <summary>
		/// Добавление db параметра
		/// </summary>
		/// <returns>билдер</returns>
		public DataSetAdapterBuilder AddParam(string name, object value)
		{
			_coreDbCommandInfo.DbParams.Add(NS_DAFactory.BuildDbParameter(name, value));
			_dbParamsDefined = true;
			return this;
		}

		/// <summary>
		/// Добавление шейпной связи
		/// </summary>
		/// <param name="relation">связь<see cref="TableRelation"/></param>
		/// <returns></returns>
		public DataSetAdapterBuilder AddRelation(TableRelation relation)
		{
			_relations.Add(relation);
			return this;
		}

		/// <summary>
		/// Выполнение
		/// </summary>
		/// <returns><see cref="DataSetAdapter"/></returns>
		public DataSetAdapter Execute()
		{
			var parameters = _dbParamsDefined ? _coreDbCommandInfo.DbParams.ToArray() : _coreDbCommandInfo.Params.ToArray();
			return _relations.Count > 0
				? DataAccessHelper.ExecuteShapedSelect(_coreDbCommandInfo.Sql, parameters, _relations.ToArray())
				: (_coreDbCommandInfo.TimeOut.HasValue)
					? DataAccessHelper.ExecuteSimpleSelect(_coreDbCommandInfo.Sql, _coreDbCommandInfo.TimeOut.Value, parameters)
					: DataAccessHelper.ExecuteSimpleSelect(_coreDbCommandInfo.Sql, 0, parameters);
		}
	}
}
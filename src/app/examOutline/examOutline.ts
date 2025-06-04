const sections = [
  {
    section: 1,
    title: "Databricks Lakehouse Platform",
    topics: [
      {
        topic: "Describe the relationship between the data lakehouse and the data warehouse.",
        answer: "A data warehouse is a data repository that can be used by data analyst or data scientist. A data lake is a generic location where structured and unstructured data can be stored. A data lakehouse is a combination of the two, where structured data is stored in a data warehouse and unstructured data is stored in a data lake. The data lakehouse allows for the flexibility of a data lake while providing the structure and performance of a data warehouse."
      },
      {
        topic: "Identify the improvement in data quality in the data lakehouse over the data lake.",
        answer: "Data quality in the data lakehouse is improved over the data lake by providing a structured environment for data storage and processing. This includes features such as schema enforcement, ACID transactions, and data governance capabilities that ensure data integrity and consistency."
      },
      {
        topic: "Compare and contrast silver and gold tables, which workloads will use a bronze table as a source, which workloads will use a gold table as a source.",
        answer: "Bronze tables are typically used for raw, unprocessed data, serving as the initial landing zone for data ingestion. Silver tables are used for cleaned and transformed data, often serving as a source for more complex analytics. Gold tables are used for high-quality, aggregated data that is ready for reporting and business intelligence. Workloads that require raw data will use bronze tables, while workloads that require processed data will use silver or gold tables."
      },
      {
        topic: "Identify elements of the Databricks Platform Architecture, such as what is located in the data plane versus the control plane and what resides in the customer’s cloud account",
        answer: "The data plane is where the actual data processing occurs, including compute resources and storage. The control plane is responsible for managing the data processing tasks, including job scheduling, cluster management, and user access control. The customer’s cloud account typically contains the data storage and compute resources used by the Databricks platform."
      },
      {
        topic: "Differentiate between all-purpose clusters and jobs clusters",
        answer: "All-purpose clusters are designed for interactive data exploration and development, allowing users to run notebooks and perform ad-hoc queries. Jobs clusters are optimized for running scheduled jobs and batch processing tasks, providing a more efficient and cost-effective solution for automated workloads."
      },
      {
        topic: "Identify how cluster software is versioned using the Databricks Runtime",
        answer: "Databricks cluster software is versioned by the Databricks Runtime by assigning a specific version number to each release. This versioning allows users to select the appropriate runtime version for their clusters, ensuring compatibility with their workloads and access to the latest features and improvements."
      },
      {
        topic: "Identify how clusters can be filtered to view those that are accessible by the user",
        answer: "Clusters can be filtered by user access permissions, allowing users to view only those clusters they have permission to access. This can be done through the Databricks UI or API, where users can apply filters based on cluster status, owner, or other attributes."
      },
      {
        topic: "Describe how clusters are terminated and the impact of terminating a cluster",
        answer: "Clusters are terminated by stopping the cluster through the Databricks UI or API. Terminating a cluster releases the compute resources and storage associated with it, which can impact any running jobs or notebooks that were using the cluster. It is important to ensure that all work is saved before terminating a cluster to avoid data loss."
      },
      {
        topic: "Identify a scenario in which restarting the cluster will be useful",
        answer: "A scenario in which restarting the cluster will be useful is when there are performance issues or memory leaks in the cluster. Restarting the cluster can help clear any cached data, free up resources, and reset the environment to a clean state, improving overall performance."
      },
      {
        topic: "Describe how to use multiple languages within the same notebook",
        answer: "Multiple languages can be used within the same notebook by using language magic commands. For example, in a Databricks notebook, you can use `%python`, `%sql`, `%scala`, or `%r` at the beginning of a cell to specify the language for that cell. This allows users to mix and match languages as needed for their data processing tasks."
      },
      {
        topic: "Identify how to run one notebook from within another notebook",
        answer: "One notebook can be run from within another notebook using the `%run` magic command. This command allows users to include the content of another notebook, enabling code reuse and modularization of workflows. For example, `%run ./path/to/another_notebook` will execute the specified notebook and make its variables and functions available in the current notebook."
      },
      {
        topic: "Identify how notebooks can be shared with others",
        answer: "Notebooks can be shared with others by using the sharing options available in the Databricks UI. Users can share notebooks by providing access permissions to specific users or groups, exporting notebooks as HTML or IPython files, or publishing notebooks to a shared workspace. Additionally, notebooks can be versioned and managed through Databricks Repos for collaborative development."
      },
      {
        topic: "Describe how Databricks Repos enables CI/CD workflows in Databricks",
        answer: "Databricks Repos enables CI/CD workflows by integrating with Git repositories, allowing users to version control their notebooks and code. This integration supports branching, merging, and pull requests, enabling collaborative development and automated deployment of code changes. Users can also set up automated tests and deployments to ensure code quality and consistency across environments."
      },
      {
        topic: "Identify Git operations available via Databricks Repos",
        answer: "Git operations available via Databricks Repos include cloning repositories, committing changes, pushing and pulling updates, creating branches, merging branches, and resolving conflicts. These operations allow users to manage their code versions and collaborate effectively within the Databricks environment."
      },
      {
        topic: "Identify limitations in Databricks Notebooks version control functionality relative to Repos.",
        answer: "Databricks Notebooks version control functionality is limited compared to Repos in that it does not support advanced Git features such as branching, merging, and pull requests. Notebooks version control primarily tracks changes to the notebook content itself, while Repos provides a full Git experience with all the associated capabilities for collaborative development and version management."
      }
    ]
  },
  {
    section: 2,
    title: "ELT with Apache Spark",
    topics: [
      {
        topic: "Extract data from a single file and from a directory of files",
        answer: "Here is an example of how to extract data from a single file and from a directory of files using PySpark:\n\n```python\n# Extracting data from a single file\nsingle_file_df = spark.read.format('csv').option('header', 'true').load('/path/to/single_file.csv')\n\n# Extracting data from a directory of files\ndirectory_df = spark.read.format('csv').option('header', 'true').load('/path/to/directory/*')\n```\nThis code reads CSV files, but you can change the format to JSON, Parquet, etc., as needed."
      },
      {
        topic: "Identify the prefix included after the FROM keyword as the data type.",
        answer: "The prefix included after the FROM keyword in a SQL query indicates the data source type, such as 'table', 'view', 'file', or 'directory'. For example, `FROM table_name` indicates a table, while `FROM '/path/to/file.csv'` indicates a file."
      },
      {
        topic: "Create a view, a temporary view, and a CTE as a reference to a file",
        answer: `Examples: 
        1. **Creating a View**:\n sql\nCREATE VIEW my_view AS SELECT * FROM my_table;\n \n\n2. **Creating a Temporary View**:\n sql\nCREATE OR REPLACE TEMP VIEW my_temp_view AS SELECT * FROM my_table;\n\n\n3. **Creating a Common Table Expression (CTE)**:\n sql\nWITH my_cte AS (SELECT * FROM my_table)\nSELECT * FROM my_cte;\n\nThese allow you to reference data in a structured way for further queries.`
      },
      {
        topic: "Identify that tables from external sources are not Delta Lake tables.",
        answer: "You can identify tables from external sources by checking their format and metadata. If a table is not stored in Delta Lake format, it will not have the Delta Lake transaction log and will not support ACID transactions, schema enforcement, or time travel features."
      },
      {
        topic: "Create a table from a JDBC connection and from an external CSV file",
        answer: "Examples:\n\n1. **Creating a Table from a JDBC Connection**:\n sql\nCREATE TABLE my_jdbc_table USING jdbc\nOPTIONS (\n  url 'jdbc:mysql://localhost:3306/mydb',\n  dbtable 'my_table',\n  user 'my_user',\n  password 'my_password'\n);\n\n\n2. **Creating a Table from an External CSV File**:\n sql\nCREATE TABLE my_csv_table USING csv\nOPTIONS (\n  path '/path/to/file.csv',\n  header 'true',\n  inferSchema 'true'\n);\n\nThese commands create tables in the Databricks environment using data from external sources."
      },
      {
        topic: "Identify how the count_if function and the count where x is null can be used",
        answer: "The `count_if` function counts the number of rows that satisfy a specific condition, while `count where x is null` counts the number of rows where a specific column `x` has NULL values. For example:\n\n```sql\nSELECT count_if(column_name IS NULL) AS null_count FROM table_name;\nSELECT count(*) FROM table_name WHERE column_name IS NULL;\n```\nThese functions are useful for data quality checks and understanding the distribution of NULL values in your dataset."
      },
      {
        topic: "Identify how the count(row) skips NULL values.",
        answer: "The `count(row)` function counts the number of rows in a dataset, but it skips NULL values. This means that if a row has any NULL values in its columns, it will still be counted as a valid row. For example:\n\n```sql\nSELECT count(*) FROM table_name;\n```\nThis will return the total number of rows, including those with NULL values in any column."
      },
      {
        topic: "Deduplicate rows from an existing Delta Lake table.",
        answer: "To deduplicate rows from an existing Delta Lake table, you can use the `ROW_NUMBER()` window function to assign a unique number to each row based on a specific column or set of columns, and then filter out duplicates. For example:\n\n```sql\nWITH deduplicated AS (\n  SELECT *, ROW_NUMBER() OVER (PARTITION BY column_name ORDER BY another_column) AS row_num\n  FROM my_table\n)\nSELECT * FROM deduplicated WHERE row_num = 1;\n```\nThis query will return only the first occurrence of each duplicate row based on the specified partitioning."
      },
      {
        topic: "Create a new table from an existing table while removing duplicate rows.",
        answer: "To create a new table from an existing table while removing duplicate rows, you can use the `CREATE TABLE AS SELECT` (CTAS) statement along with the `DISTINCT` keyword. For example:\n\n```sql\nCREATE TABLE new_table AS\nSELECT DISTINCT * FROM existing_table;\n```\nThis will create a new table `new_table` that contains all unique rows from `existing_table`."
      },
      { topic: "Deduplicate a row based on specific columns.", 
        answer: "To deduplicate a row based on specific columns, you can use the `ROW_NUMBER()` function in combination with a `PARTITION BY` clause. For example:\n\n```sql\nWITH deduplicated AS (\n  SELECT *, ROW_NUMBER() OVER (PARTITION BY column1, column2 ORDER BY another_column) AS row_num\n  FROM my_table\n)\nSELECT * FROM deduplicated WHERE row_num = 1;\n```\nThis query will return only the first occurrence of each unique combination of `column1` and `column2`."},
      {
        topic: "Validate that the primary key is unique across all rows.",
        answer: "To validate that the primary key is unique across all rows, you can use the `COUNT()` function in combination with a `GROUP BY` clause. For example:\n\n```sql\nSELECT primary_key_column, COUNT(*) AS count\nFROM my_table\nGROUP BY primary_key_column\nHAVING count > 1;\n```\nThis query will return any primary key values that are not unique, along with their counts."
      },
      {
        topic: "Validate that a field is associated with just one unique value in another field.",
        answer: "To validate that a field is associated with just one unique value in another field, you can use the `GROUP BY` clause along with the `HAVING` clause. For example:\n\n```sql\nSELECT field1, COUNT(DISTINCT field2) AS unique_count\nFROM my_table\nGROUP BY field1\nHAVING unique_count > 1;\n```\nThis query will return any `field1` values that are associated with more than one unique `field2` value."
      },
      {
        topic: "Validate that a value is not present in a specific field.",
        answer: "To validate that a value is not present in a specific field, you can use the `NOT IN` clause or the `WHERE` clause with a condition. For example:\n\n```sql\nSELECT * FROM my_table\nWHERE field_name NOT IN ('value1', 'value2');\n```\nThis query will return all rows where `field_name` does not contain 'value1' or 'value2'."
      },
      { topic: "Cast a column to a timestamp.", 
        answer: "To cast a column to a timestamp, you can use the `CAST()` function or the `TO_TIMESTAMP()` function. For example:\n\n```sql\nSELECT CAST(column_name AS TIMESTAMP) AS timestamp_column FROM my_table;\n```\nor\n```sql\nSELECT TO_TIMESTAMP(column_name) AS timestamp_column FROM my_table;\n```\nThis will convert the specified column to a timestamp data type."
       },
      { topic: "Extract calendar data from a timestamp.", 
        answer: "To extract calendar data from a timestamp, you can use date functions such as `YEAR()`, `MONTH()`, `DAY()`, `HOUR()`, etc. For example:\n\n```sql\nSELECT YEAR(timestamp_column) AS year,\n       MONTH(timestamp_column) AS month,\n       DAY(timestamp_column) AS day,\n       HOUR(timestamp_column) AS hour\nFROM my_table;\n```\nThis will return the year, month, day, and hour components of the timestamp."
       },
      {
        topic: "Extract a specific pattern from an existing string column.",
        answer: "To extract a specific pattern from an existing string column, you can use the `REGEXP_EXTRACT()` function or the `SUBSTRING()` function. For example:\n\n```sql\nSELECT REGEXP_EXTRACT(string_column, 'pattern', 1) AS extracted_pattern FROM my_table;\n```\nor\n```sql\nSELECT SUBSTRING(string_column, start_position, length) AS extracted_substring FROM my_table;\n```\nThis will return the extracted pattern or substring based on the specified regular expression or position."
      },
      {
        topic: "Utilize the dot syntax to extract nested data fields.",
        answer: "To utilize the dot syntax to extract nested data fields, you can access fields within a struct or map by using the dot notation. For example, if you have a struct column named `nested_column` with a field `field_name`, you can extract it as follows:\n\n```sql\nSELECT nested_column.field_name AS extracted_field FROM my_table;\n```\nThis will return the value of `field_name` from the `nested_column` struct."
      },
      {
        topic: "Identify the benefits of using array functions.",
        answer: "Array functions provide several benefits, including the ability to perform operations on collections of data, such as filtering, transforming, and aggregating array elements. They allow for more complex data manipulations and analyses, enabling users to work with nested data structures efficiently. Examples of array functions include `ARRAY_CONTAINS()`, `ARRAY_AGG()`, and `EXPLODE()`."
      },
      { topic: "Parse JSON strings into structs.", 
        answer: "To parse JSON strings into structs, you can use the `FROM_JSON()` function in Databricks. This function takes a JSON string and a schema definition and converts it into a struct. For example:\n\n```sql\nSELECT FROM_JSON(json_string_column, 'struct<field1:string, field2:int>') AS parsed_struct FROM my_table;\n```\nThis will convert the JSON string into a struct with the specified fields."
       },
      {
        topic: "Identify which result will be returned based on a join query.",
        answer: "To identify which result will be returned based on a join query, you need to understand the type of join being used (e.g., INNER JOIN, LEFT JOIN, RIGHT JOIN, FULL OUTER JOIN) and the conditions specified in the `ON` clause. For example:\n\n```sql\nSELECT * FROM table1\nJOIN table2 ON table1.id = table2.id;\n```\nThis will return rows where there is a match between `table1` and `table2` based on the `id` column for an INNER JOIN."
      },
      {
        topic: "Identify a scenario to use the explode function versus the flatten function",
        answer: "Use the `explode` function when you want to transform an array column into multiple rows, where each element of the array becomes a separate row. For example:\n\n```sql\nSELECT explode(array_column) AS exploded_element FROM my_table;\n```\nUse the `flatten` function when you want to convert a nested array structure into a single-level array. For example:\n\n```sql\nSELECT flatten(nested_array_column) AS flattened_array FROM my_table;\n```\nThis will return a single-level array from a nested array structure."
      },
      {
        topic: "Identify the PIVOT clause as a way to convert data from a long format to a wide format.",
        answer: "The `PIVOT` clause is used to convert data from a long format (where each row represents a single observation) to a wide format (where each unique value in a specified column becomes a separate column). For example:\n\n```sql\nSELECT * FROM my_table\nPIVOT (\n  SUM(value_column)\n  FOR category_column IN ('category1', 'category2', 'category3')\n);\n```\nThis will create new columns for each category with the corresponding summed values."
      },
      { topic: "Define a SQL UDF.", 
        answer: "A SQL UDF (User-Defined Function) is a custom function that allows users to define their own logic and operations in SQL queries. It can be used to encapsulate complex calculations or transformations that are not available as built-in functions. UDFs can be written in SQL or in programming languages like Python or Scala, depending on the environment."
      },
      { topic: "Identify the location of a function.", 
        answer: "The location of a function can be identified by its schema and name. In Databricks, functions can be stored in the default schema or in a user-defined schema. You can use the `SHOW FUNCTIONS` command to list all functions available in a specific schema, or you can query the `information_schema` to find details about a specific function."
      },
      {
        topic: "Describe the security model for sharing SQL UDFs.",
        answer: "The security model for sharing SQL UDFs in Databricks involves defining access controls and permissions for the UDFs. Users can grant or revoke permissions to specific users or groups, allowing them to execute the UDFs. Additionally, UDFs can be shared across different workspaces or clusters, ensuring that only authorized users can access and use them."
      },
      { topic: "Use CASE/WHEN in SQL code.", 
        answer: "To use `CASE/WHEN` in SQL code, you can create conditional logic that evaluates expressions and returns different values based on the conditions specified. For example:\n\n```sql\nSELECT column_name,\n       CASE\n         WHEN condition1 THEN result1\n         WHEN condition2 THEN result2\n         ELSE default_result\n       END AS new_column\nFROM my_table;\n```\nThis will create a new column with values based on the conditions evaluated for each row."
       },
      { topic: "Leverage CASE/WHEN for custom control flow.", 
        answer: "To leverage `CASE/WHEN` for custom control flow, you can use it to implement complex logic in your SQL queries. For example, you can use it to categorize data based on specific conditions or to perform different calculations based on the values of a column. This allows for more dynamic and flexible query results.\n\nExample:\n\n```sql\nSELECT column_name,\n       CASE\n         WHEN value > 100 THEN 'High'\n         WHEN value BETWEEN 50 AND 100 THEN 'Medium'\n         ELSE 'Low'\n       END AS category\nFROM my_table;\n```\nThis will categorize the `value` column into 'High', 'Medium', or 'Low' based on the specified conditions."
       }
    ]
  },
  {
    section: 3,
    title: "Incremental Data Processing",
    topics: [
      {
        topic: "Identify where Delta Lake provides ACID transactions",
        answer: "Delta Lake provides ACID transactions by ensuring that all operations on Delta tables are atomic, consistent, isolated, and durable. This means that when a transaction is committed, it either fully succeeds or fails without leaving the table in an inconsistent state. Delta Lake uses a transaction log to track changes and ensure that concurrent operations do not interfere with each other."
      },
      { topic: "Identify the benefits of ACID transactions.", 
        answer: "ACID transactions provide several benefits, including data integrity, consistency, and reliability. They ensure that all changes to the data are made in a controlled manner, preventing partial updates or corrupt data. ACID transactions also allow for concurrent access to the data without conflicts, enabling multiple users to read and write data simultaneously without affecting each other's operations."
       },
      {
        topic: "Identify whether a transaction is ACID-compliant.",
        answer: "To identify whether a transaction is ACID-compliant, you can check if it meets the four properties of ACID: Atomicity (the transaction is all-or-nothing), Consistency (the database remains in a valid state before and after the transaction), Isolation (transactions do not interfere with each other), and Durability (once a transaction is committed, it remains permanent). In Delta Lake, you can verify this by checking the transaction log and ensuring that the operations are logged correctly."
      },
      { topic: "Compare and contrast data and metadata.", 
        answer: "Data refers to the actual information stored in a database or data lake, such as records, values, and attributes. Metadata, on the other hand, is data about the data; it provides context and information about the structure, format, and organization of the data. For example, metadata can include details about the schema, data types, and relationships between different data elements."},
      {
        topic: "Compare and contrast managed and external tables.",
        answer: "Managed tables are fully controlled by the Databricks platform, meaning that the data and metadata are stored in the Databricks-managed storage. When a managed table is dropped, both the data and metadata are deleted. External tables, however, reference data stored outside of the Databricks-managed storage (e.g., in cloud storage). When an external table is dropped, only the metadata is removed, leaving the underlying data intact."
      },
      {
        topic: "Identify a scenario to use an external table.",
        answer: "An external table is useful when you want to query data stored in an external location, such as cloud storage (e.g., AWS S3, Azure Blob Storage) without moving the data into the Databricks-managed storage. This is beneficial for scenarios where data is large, frequently updated, or shared across multiple systems, allowing for cost-effective and efficient data access."
      },
      { topic: "Create a managed table.", 
        answer: "To create a managed table in Databricks, you can use the `CREATE TABLE` statement without specifying the `LOCATION` option. For example:\n\n```sql\nCREATE TABLE my_managed_table (\n  id INT,\n  name STRING\n);\n```\nThis will create a managed table named `my_managed_table` with the specified schema, and the data will be stored in the Databricks-managed storage."
       },
      { topic: "Identify the location of a table.", 
        answer: "To identify the location of a table in Databricks, you can use the `DESCRIBE EXTENDED` command. For example:\n\n```sql\nDESCRIBE EXTENDED my_table;\n```\nThis will provide detailed information about the table, including its location in the storage system (if it is an external table) and other metadata such as schema and properties."
       },
      {
        topic: "Inspect the directory structure of Delta Lake files.",
        answer: "To inspect the directory structure of Delta Lake files, you can use the Databricks File System (DBFS) commands or the `ls` command in a notebook cell. For example:\n\n```python\n%fs ls /path/to/delta_table/\n```\nThis will list the files and directories within the specified Delta Lake table location, allowing you to see the underlying structure and files used by Delta Lake."
      },
      {
        topic: "Identify who has written previous versions of a table.",
        answer: "To identify who has written previous versions of a table, you can query the Delta Lake transaction log using the `DESCRIBE HISTORY` command. For example:\n\n```sql\nDESCRIBE HISTORY my_table;\n```\nThis will return a history of changes made to the table, including information about the user who performed each operation, the timestamp, and the operation type (e.g., INSERT, UPDATE, DELETE)."
      },
      { topic: "Review a history of table transactions.", 
        answer: "To review a history of table transactions, you can use the `DESCRIBE HISTORY` command in Databricks. This command provides a detailed log of all operations performed on the table, including timestamps, user information, and operation types. For example:\n\n```sql\nDESCRIBE HISTORY my_table;\n```\nThis will return a list of all transactions, allowing you to track changes and understand the evolution of the table over time."
       },
      { topic: "Roll back a table to a previous version.", 
        answer: "To roll back a table to a previous version, you can use the `RESTORE` command in Delta Lake. For example:\n\n```sql\nRESTORE TABLE my_table TO VERSION AS OF 2;\n```\nThis command will restore the table `my_table` to its state at version 2, effectively rolling back any changes made after that version."
       },
      {
        topic: "Identify that a table can be rolled back to a previous version.",
        answer: "A table in Delta Lake can be rolled back to a previous version using the `RESTORE` command. This allows users to revert the table to a specific point in time or version, effectively undoing any changes made after that version. This feature is useful for recovering from accidental data modifications or deletions."
      },
      { topic: "Query a specific version of a table.", 
        answer: "To query a specific version of a table, you can use the `VERSION AS OF` clause in your SQL query. For example:\n\n```sql\nSELECT * FROM my_table VERSION AS OF 2;\n```\nThis will return the data from `my_table` as it was at version 2, allowing you to analyze historical data without affecting the current state of the table."
       },
      {
        topic: "Identify why Zordering is beneficial to Delta Lake tables.",
        answer: "Zordering is beneficial to Delta Lake tables because it optimizes the layout of data on disk, improving query performance by reducing the amount of data scanned during queries. By clustering related data together based on specific columns, Zordering enhances data locality, leading to faster read operations and more efficient use of resources."
      },
      { topic: "Identify how vacuum commits deletes.", 
        answer: "Vacuum commits in Delta Lake delete files that are no longer needed, based on the retention period specified. When you run the `VACUUM` command, it removes files that are older than the specified retention period, effectively cleaning up storage and freeing up space. This helps maintain the performance of Delta Lake tables by removing obsolete data."
       },
      {
        topic: "Identify the kind of files Optimize compacts.",
        answer: "Optimize compacts small files in Delta Lake into larger files, improving query performance and reducing the number of files that need to be read during data processing. This is particularly useful for tables with a high number of small files, as it reduces overhead and enhances the efficiency of data access."
      },
      { topic: "Identify CTAS as a solution.", answer: "" },
      { topic: "Create a generated column.", answer: "" },
      { topic: "Add a table comment.", answer: "" },
      {
        topic: "Use CREATE OR REPLACE TABLE and INSERT OVERWRITE",
        answer: ""
      },
      {
        topic: "Compare and contrast CREATE OR REPLACE TABLE and INSERT OVERWRITE",
        answer: ""
      },
      {
        topic: "Identify a scenario in which MERGE should be used.",
        answer: ""
      },
      {
        topic: "Identify MERGE as a command to deduplicate data upon writing.",
        answer: ""
      },
      { topic: "Describe the benefits of the MERGE command.", answer: "" },
      {
        topic: "Identify why a COPY INTO statement is not duplicating data in the target table.",
        answer: ""
      },
      {
        topic: "Identify a scenario in which COPY INTO should be used.",
        answer: ""
      },
      { topic: "Use COPY INTO to insert data.", answer: "" },
      {
        topic: "Identify the components necessary to create a new DLT pipeline.",
        answer: ""
      },
      {
        topic: "Identify the purpose of the target and of the notebook libraries in creating a pipeline.",
        answer: ""
      },
      {
        topic: "Compare and contrast triggered and continuous pipelines in terms of cost and latency",
        answer: ""
      },
      {
        topic: "Identify which source location is utilizing Auto Loader.",
        answer: ""
      },
      {
        topic: "Identify a scenario in which Auto Loader is beneficial.",
        answer: ""
      },
      {
        topic: "Identify why Auto Loader has inferred all data to be STRING from a JSON source",
        answer: ""
      },
      {
        topic: "Identify the default behavior of a constraint violation",
        answer: ""
      },
      {
        topic: "Identify the impact of ON VIOLATION DROP ROW and ON VIOLATION FAIL UPDATEfor a constraint violation",
        answer: ""
      },
      {
        topic: "Explain change data capture and the behavior of APPLY CHANGES INTO",
        answer: ""
      },
      {
        topic: "Query the events log to get metrics, perform audit loggin, examine lineage.",
        answer: ""
      },
      {
        topic: "Troubleshoot DLT syntax: Identify which notebook in a DLT pipeline produced an error, identify the need for LIVE in create statement, identify the need for STREAM in from clause.",
        answer: ""
      }
    ]
  },
  {
    section: 4,
    title: "Production Pipelines",
    topics: [
      {
        topic: "Identify the benefits of using multiple tasks in Jobs.",
        answer: ""
      },
      { topic: "Set up a predecessor task in Jobs.", answer: "" },
      {
        topic: "Identify a scenario in which a predecessor task should be set up.",
        answer: ""
      },
      { topic: "Review a task's execution history.", answer: "" },
      { topic: "Identify CRON as a scheduling opportunity.", answer: "" },
      { topic: "Debug a failed task.", answer: "" },
      { topic: "Set up a retry policy in case of failure.", answer: "" },
      {
        topic: "Create an alert in the case of a failed task.",
        answer: ""
      },
      { topic: "Identify that an alert can be sent via email.", answer: "" }
    ]
  },
  {
    section: 5,
    title: "Data Governance",
    topics: [
      {
        topic: "Identify one of the four areas of data governance.",
        answer: ""
      },
      {
        topic: "Compare and contrast metastores and catalogs.",
        answer: ""
      },
      { topic: "Identify Unity Catalog securables.", answer: "" },
      { topic: "Define a service principal.", answer: "" },
      {
        topic: "Identify the cluster security modes compatible with Unity Catalog.",
        answer: ""
      },
      { topic: "Create a UC-enabled all-purpose cluster.", answer: "" },
      { topic: "Create a DBSQL warehouse.", answer: "" },
      {
        topic: "Identify how to query a three-layer namespace.",
        answer: ""
      },
      { topic: "Implement data object access control", answer: "" },
      {
        topic: "Identify colocating metastores with a workspace as best practice.",
        answer: ""
      },
      {
        topic: "Identify using service principals for connections as best practice.",
        answer: ""
      },
      {
        topic: "Identify the segregation of business units across catalog as best practice.",
        answer: ""
      }
    ]
  }
]

export default sections;

import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';


export class AzureSqlServerazureadadministrators implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Azure SQL Serverazureadadministrators',
		name: 'N8nDevAzureSqlServerazureadadministrators',
		icon: { light: 'file:./azure-sql-serverazureadadministrators.png', dark: 'file:./azure-sql-serverazureadadministrators.dark.png' },
		group: ['input'],
		version: 1,
		subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
		description: 'Azure SQL Database REST API manages database services.',
		defaults: { name: 'Azure SQL Serverazureadadministrators' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'N8nDevAzureSqlServerazureadadministratorsApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '={{\$credentials.url}}',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [],
			"default": ""
		},
		
		],
	};
}

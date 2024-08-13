export const columnsJson = {
    label: 'Columns',
    columns: [
        {
            components: [
                {
                    title: 'OCR Results ',
                    collapsible: false,
                    key: 'ocrResults',
                    type: 'panel',
                    label: 'Panel',
                    input: false,
                    tableView: false,
                    components: [
                        {
                            label: 'HTML',
                            attrs: [
                                {
                                    attr: '',
                                    value: ''
                                }
                            ],
                            content: '<p></p>',
                            refreshOnChange: false,
                            key: 'html',
                            type: 'htmlelement',
                            input: false,
                            tableView: false
                        }
                    ]
                }
            ],
            width: 6,
            offset: 0,
            push: 0,
            pull: 0,
            size: 'md',
            currentWidth: 6
        },
        {
            components: [],
            width: 6,
            offset: 0,
            push: 0,
            pull: 0,
            size: 'md',
            currentWidth: 6
        }
    ],
    key: 'columns',
    type: 'columns',
    input: false,
    tableView: false
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSlNPTi5jb25zdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3BpY3MtbW9kdWxlL2R5bmFtaWMvc3JjL2xpYi9waWNzLWR5bmFtaWMvQGNvcmUvSlNPTi5jb25zdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLENBQUMsTUFBTSxXQUFXLEdBQUc7SUFDekIsS0FBSyxFQUFFLFNBQVM7SUFDaEIsT0FBTyxFQUFFO1FBQ1A7WUFDRSxVQUFVLEVBQUU7Z0JBQ1Y7b0JBQ0UsS0FBSyxFQUFFLGNBQWM7b0JBQ3JCLFdBQVcsRUFBRSxLQUFLO29CQUNsQixHQUFHLEVBQUUsWUFBWTtvQkFDakIsSUFBSSxFQUFFLE9BQU87b0JBQ2IsS0FBSyxFQUFFLE9BQU87b0JBQ2QsS0FBSyxFQUFFLEtBQUs7b0JBQ1osU0FBUyxFQUFFLEtBQUs7b0JBQ2hCLFVBQVUsRUFBRTt3QkFDVjs0QkFDRSxLQUFLLEVBQUUsTUFBTTs0QkFDYixLQUFLLEVBQUU7Z0NBQ0w7b0NBQ0UsSUFBSSxFQUFFLEVBQUU7b0NBQ1IsS0FBSyxFQUFFLEVBQUU7aUNBQ1Y7NkJBQ0Y7NEJBQ0QsT0FBTyxFQUFFLFNBQVM7NEJBQ2xCLGVBQWUsRUFBRSxLQUFLOzRCQUN0QixHQUFHLEVBQUUsTUFBTTs0QkFDWCxJQUFJLEVBQUUsYUFBYTs0QkFDbkIsS0FBSyxFQUFFLEtBQUs7NEJBQ1osU0FBUyxFQUFFLEtBQUs7eUJBQ2pCO3FCQUNGO2lCQUNGO2FBQ0Y7WUFDRCxLQUFLLEVBQUUsQ0FBQztZQUNSLE1BQU0sRUFBRSxDQUFDO1lBQ1QsSUFBSSxFQUFFLENBQUM7WUFDUCxJQUFJLEVBQUUsQ0FBQztZQUNQLElBQUksRUFBRSxJQUFJO1lBQ1YsWUFBWSxFQUFFLENBQUM7U0FDaEI7UUFDRDtZQUNFLFVBQVUsRUFBRSxFQUFFO1lBQ2QsS0FBSyxFQUFFLENBQUM7WUFDUixNQUFNLEVBQUUsQ0FBQztZQUNULElBQUksRUFBRSxDQUFDO1lBQ1AsSUFBSSxFQUFFLENBQUM7WUFDUCxJQUFJLEVBQUUsSUFBSTtZQUNWLFlBQVksRUFBRSxDQUFDO1NBQ2hCO0tBQ0Y7SUFDRCxHQUFHLEVBQUUsU0FBUztJQUNkLElBQUksRUFBRSxTQUFTO0lBQ2YsS0FBSyxFQUFFLEtBQUs7SUFDWixTQUFTLEVBQUUsS0FBSztDQUNqQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGNvbHVtbnNKc29uID0ge1xyXG4gIGxhYmVsOiAnQ29sdW1ucycsXHJcbiAgY29sdW1uczogW1xyXG4gICAge1xyXG4gICAgICBjb21wb25lbnRzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdGl0bGU6ICdPQ1IgUmVzdWx0cyAnLFxyXG4gICAgICAgICAgY29sbGFwc2libGU6IGZhbHNlLFxyXG4gICAgICAgICAga2V5OiAnb2NyUmVzdWx0cycsXHJcbiAgICAgICAgICB0eXBlOiAncGFuZWwnLFxyXG4gICAgICAgICAgbGFiZWw6ICdQYW5lbCcsXHJcbiAgICAgICAgICBpbnB1dDogZmFsc2UsXHJcbiAgICAgICAgICB0YWJsZVZpZXc6IGZhbHNlLFxyXG4gICAgICAgICAgY29tcG9uZW50czogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgbGFiZWw6ICdIVE1MJyxcclxuICAgICAgICAgICAgICBhdHRyczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICBhdHRyOiAnJyxcclxuICAgICAgICAgICAgICAgICAgdmFsdWU6ICcnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICBjb250ZW50OiAnPHA+PC9wPicsXHJcbiAgICAgICAgICAgICAgcmVmcmVzaE9uQ2hhbmdlOiBmYWxzZSxcclxuICAgICAgICAgICAgICBrZXk6ICdodG1sJyxcclxuICAgICAgICAgICAgICB0eXBlOiAnaHRtbGVsZW1lbnQnLFxyXG4gICAgICAgICAgICAgIGlucHV0OiBmYWxzZSxcclxuICAgICAgICAgICAgICB0YWJsZVZpZXc6IGZhbHNlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIF1cclxuICAgICAgICB9XHJcbiAgICAgIF0sXHJcbiAgICAgIHdpZHRoOiA2LFxyXG4gICAgICBvZmZzZXQ6IDAsXHJcbiAgICAgIHB1c2g6IDAsXHJcbiAgICAgIHB1bGw6IDAsXHJcbiAgICAgIHNpemU6ICdtZCcsXHJcbiAgICAgIGN1cnJlbnRXaWR0aDogNlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgY29tcG9uZW50czogW10sXHJcbiAgICAgIHdpZHRoOiA2LFxyXG4gICAgICBvZmZzZXQ6IDAsXHJcbiAgICAgIHB1c2g6IDAsXHJcbiAgICAgIHB1bGw6IDAsXHJcbiAgICAgIHNpemU6ICdtZCcsXHJcbiAgICAgIGN1cnJlbnRXaWR0aDogNlxyXG4gICAgfVxyXG4gIF0sXHJcbiAga2V5OiAnY29sdW1ucycsXHJcbiAgdHlwZTogJ2NvbHVtbnMnLFxyXG4gIGlucHV0OiBmYWxzZSxcclxuICB0YWJsZVZpZXc6IGZhbHNlXHJcbn07XHJcbiJdfQ==
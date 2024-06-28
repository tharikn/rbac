export const options = {
    builder: {
        premium: false,
        basic: {
            title: 'Basic',
            weight: 0,
            components: {
                textfield: true,
                textarea: true,
                fileupload: false,
                myrating: false,
                globalsearch: false,
                picsselect: false,
            }
        },
        advanced: {
            title: 'Advanced',
            weight: 0,
            components: {
                email: true,
                url: false,
                tags: false,
                address: false,
                survey: false,
                currency: true,
                signature: true,
                day: false,
                time: false,
                DateFieldComponent: false,
                phoneNumber: true,
                datetime: true
            }
        },
        layout: {
            title: 'Layout',
            weight: 0,
            components: {
                panel: true,
                table: true,
                tabs: true,
                well: true,
                columns: true,
                fieldset: true,
                content: true,
                htmlelement: true
            }
        },
        data: {
            title: 'Data',
            weight: '5',
            components: {
                datagrid: true
            }
        }
    },
    language: 'en'
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3B0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3BpY3MtbW9kdWxlL3BhZ2UtYnVpbGRlci9zcmMvbGliL3BpY3MtcGFnZWJ1aWxkZXIvcGFnZS1idWlsZGVyL3BhZ2UtYnVpbGRlci1hZGQvQGNvcmUvb3B0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLENBQUMsTUFBTSxPQUFPLEdBQUc7SUFDckIsT0FBTyxFQUFFO1FBQ1AsT0FBTyxFQUFFLEtBQUs7UUFDZCxLQUFLLEVBQUU7WUFDTCxLQUFLLEVBQUUsT0FBTztZQUNkLE1BQU0sRUFBRSxDQUFDO1lBQ1QsVUFBVSxFQUFFO2dCQUNWLFNBQVMsRUFBRSxJQUFJO2dCQUNmLFFBQVEsRUFBRSxJQUFJO2dCQUNkLFVBQVUsRUFBRSxLQUFLO2dCQUNqQixRQUFRLEVBQUUsS0FBSztnQkFDZixZQUFZLEVBQUcsS0FBSztnQkFDcEIsVUFBVSxFQUFFLEtBQUs7YUFDbEI7U0FDRjtRQUNELFFBQVEsRUFBRTtZQUNSLEtBQUssRUFBRSxVQUFVO1lBQ2pCLE1BQU0sRUFBRSxDQUFDO1lBQ1QsVUFBVSxFQUFFO2dCQUNWLEtBQUssRUFBRSxJQUFJO2dCQUNYLEdBQUcsRUFBRSxLQUFLO2dCQUNWLElBQUksRUFBRSxLQUFLO2dCQUNYLE9BQU8sRUFBRSxLQUFLO2dCQUNkLE1BQU0sRUFBRSxLQUFLO2dCQUNiLFFBQVEsRUFBRSxJQUFJO2dCQUNkLFNBQVMsRUFBRSxJQUFJO2dCQUNmLEdBQUcsRUFBRSxLQUFLO2dCQUNWLElBQUksRUFBRSxLQUFLO2dCQUNYLGtCQUFrQixFQUFFLEtBQUs7Z0JBQ3pCLFdBQVcsRUFBRSxJQUFJO2dCQUNqQixRQUFRLEVBQUUsSUFBSTthQUNmO1NBQ0Y7UUFDRCxNQUFNLEVBQUU7WUFDTixLQUFLLEVBQUUsUUFBUTtZQUNmLE1BQU0sRUFBRSxDQUFDO1lBQ1QsVUFBVSxFQUFFO2dCQUNWLEtBQUssRUFBRSxJQUFJO2dCQUNYLEtBQUssRUFBRSxJQUFJO2dCQUNYLElBQUksRUFBRSxJQUFJO2dCQUNWLElBQUksRUFBRSxJQUFJO2dCQUNWLE9BQU8sRUFBRSxJQUFJO2dCQUNiLFFBQVEsRUFBRSxJQUFJO2dCQUNkLE9BQU8sRUFBRSxJQUFJO2dCQUNiLFdBQVcsRUFBRSxJQUFJO2FBQ2xCO1NBQ0Y7UUFDRCxJQUFJLEVBQUU7WUFDSixLQUFLLEVBQUUsTUFBTTtZQUNiLE1BQU0sRUFBRSxHQUFHO1lBQ1gsVUFBVSxFQUFFO2dCQUNWLFFBQVEsRUFBRSxJQUFJO2FBQ2Y7U0FDRjtLQUNGO0lBQ0QsUUFBUSxFQUFFLElBQUk7Q0FDZixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgYnVpbGRlcjoge1xyXG4gICAgcHJlbWl1bTogZmFsc2UsXHJcbiAgICBiYXNpYzoge1xyXG4gICAgICB0aXRsZTogJ0Jhc2ljJyxcclxuICAgICAgd2VpZ2h0OiAwLFxyXG4gICAgICBjb21wb25lbnRzOiB7XHJcbiAgICAgICAgdGV4dGZpZWxkOiB0cnVlLFxyXG4gICAgICAgIHRleHRhcmVhOiB0cnVlLFxyXG4gICAgICAgIGZpbGV1cGxvYWQ6IGZhbHNlLFxyXG4gICAgICAgIG15cmF0aW5nOiBmYWxzZSxcclxuICAgICAgICBnbG9iYWxzZWFyY2g6ICBmYWxzZSxcclxuICAgICAgICBwaWNzc2VsZWN0OiBmYWxzZSxcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGFkdmFuY2VkOiB7XHJcbiAgICAgIHRpdGxlOiAnQWR2YW5jZWQnLFxyXG4gICAgICB3ZWlnaHQ6IDAsXHJcbiAgICAgIGNvbXBvbmVudHM6IHtcclxuICAgICAgICBlbWFpbDogdHJ1ZSxcclxuICAgICAgICB1cmw6IGZhbHNlLFxyXG4gICAgICAgIHRhZ3M6IGZhbHNlLFxyXG4gICAgICAgIGFkZHJlc3M6IGZhbHNlLFxyXG4gICAgICAgIHN1cnZleTogZmFsc2UsXHJcbiAgICAgICAgY3VycmVuY3k6IHRydWUsXHJcbiAgICAgICAgc2lnbmF0dXJlOiB0cnVlLFxyXG4gICAgICAgIGRheTogZmFsc2UsXHJcbiAgICAgICAgdGltZTogZmFsc2UsXHJcbiAgICAgICAgRGF0ZUZpZWxkQ29tcG9uZW50OiBmYWxzZSxcclxuICAgICAgICBwaG9uZU51bWJlcjogdHJ1ZSxcclxuICAgICAgICBkYXRldGltZTogdHJ1ZVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgbGF5b3V0OiB7XHJcbiAgICAgIHRpdGxlOiAnTGF5b3V0JyxcclxuICAgICAgd2VpZ2h0OiAwLFxyXG4gICAgICBjb21wb25lbnRzOiB7XHJcbiAgICAgICAgcGFuZWw6IHRydWUsXHJcbiAgICAgICAgdGFibGU6IHRydWUsXHJcbiAgICAgICAgdGFiczogdHJ1ZSxcclxuICAgICAgICB3ZWxsOiB0cnVlLFxyXG4gICAgICAgIGNvbHVtbnM6IHRydWUsXHJcbiAgICAgICAgZmllbGRzZXQ6IHRydWUsXHJcbiAgICAgICAgY29udGVudDogdHJ1ZSxcclxuICAgICAgICBodG1sZWxlbWVudDogdHJ1ZVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgZGF0YToge1xyXG4gICAgICB0aXRsZTogJ0RhdGEnLFxyXG4gICAgICB3ZWlnaHQ6ICc1JyxcclxuICAgICAgY29tcG9uZW50czoge1xyXG4gICAgICAgIGRhdGFncmlkOiB0cnVlXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG4gIGxhbmd1YWdlOiAnZW4nXHJcbn07XHJcbiJdfQ==
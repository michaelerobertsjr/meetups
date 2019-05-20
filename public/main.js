$.get('/events', function (response){
    const rows = response.map((event) => {
        return `
            <tr>
                <td>
                    ${event.name}
                    ${event.id}
                    ${event.local_date}
                    ${event.local_time}
                    ${event.description}
                    <a href='${event.link}'> Sign up here </a>
                </td>
            </tr>
        `;
    });
    $("table > tbody").append(rows);
}) 
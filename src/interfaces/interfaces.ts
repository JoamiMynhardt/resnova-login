export interface HtmlEvent extends Event {
    target: HTMLInputElement;
}


export interface colorObjectI{
    id: string,
    color: string
}

export interface WidgetI{
    id: string,
    user_id: string | number,
    description?: string,
    name?:string,
    config: {
        "description": string,
        link_style: string,
        link_hover_style: string,
        show_property_thumbnail: boolean,
        "button_colour": string,
        "button_text_colour": string,
        "button_hover_colour": string,
        "button_hover_text_colour": string,
        "contact_email": string,
        "additional_email": string,
        "name": string | null,
        "enable_bookings": boolean,
        "enable_card_payments": boolean,
        "payment_gateway_api": string,
        "payment_gateway_config": object,
        "module": string,
        "display_days": number,
        "matrix_mode": string,
        "available_text": string,
        "unavailable_text": string,
        "principals": [
            {
                "id": string,
                "properties": [
                    {
                        "id": string,
                        "no_children_allowed": boolean
                    },
                ]
            }
        ],
        "can_pay_later": boolean,
        "can_pay_full": boolean,
        "principal_source_maps": []
    },
    custom_css: string,
    version?: string,
    created_at?: string,
    updated_at?: string,
    edited?: boolean
}
export interface eventI {
    target: {
        checked: boolean
    }
}
export interface FilledObjectI{
    slug: string,
    payOptions: PaymentFieldsI
}

export interface PaymentResultObject{
    id: string,
    val: string
}

export interface PaymentMethodsI {
    id: string,
    name: string,
    aviable: number,
    created_at?: string,
    updated_at?: string,
    slug: string,
    payment_fields: [
            id: number,
            payment_id: number,
            title: string,
            field_name:string,
            slug:string,
            created_at: string,
            updated_at: string
    ]

}


export interface PaymentFieldsI{
    id?: number,
    payment_id?: number,
    title?: string,
    field_name:string,
    created_at?: string,
    updated_at?: string
}

export interface PropertySourcesI{
    id: string,
    name: string
}

